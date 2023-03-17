import React, { useEffect, useState, useRef } from 'react';
import styles from './ExampleScreenStyle';
import FlipCard from 'react-native-flip-card';
import data from './data';
import data from './data';
import * as Speech from 'expo-speech';
import TextComponent from '../../components/TextComponent';
import { PanResponder, StyleSheet, View, Text, Platform, Image, Animated, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Feather } from '@expo/vector-icons';
const getIntroductionCardWidth = () => screenWidth * 0.7;
const getIntroductionCardHeight = () => Math.round(getIntroductionCardWidth() / 0.875);
const getIntroductionCardBorderRadius = () => Math.round(getIntroductionCardHeight() / 16);

const Card = ({ showHalo, isFlipped, word, translation, image }) => {
	const halo = new Animated.Value(0);
	const enter = new Animated.Value(0.5);

	useEffect(() => {
		animateEntrance();
		if (image) {
			Image.prefetch(image);
		}
	}, []);

	const animateEntrance = () => {
		Animated.spring(enter, {
			toValue: 1,
			friction: 8,
		}).start(({ finished }) => {
			if (finished) {
				startHaloAnimation();
			}
		});
	};

	const startHaloAnimation = () => {
		Animated.timing(halo, {
			toValue: 1,
			duration: 2000,
		}).start(({ finished }) => {
			if (finished) {
				halo.setValue(0);
				startHaloAnimation();
			}
		});
	};

	const renderCardBackSide = () => {
		if (image) {
			return <Image resizeMode="cover" style={styles.image} source={{ uri: image }} />;
		}

		return <Text>{translation}</Text>;
	};

	const haloStyles = {
		position: 'absolute',
		width: getIntroductionCardWidth(),
		height: getIntroductionCardHeight(),
		borderRadius: getIntroductionCardBorderRadius(),
		opacity: halo.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 0],
		}),
		transform: [
			{
				scale: halo.interpolate({
					inputRange: [0, 1],
					outputRange: [0.7, 1.125],
				}),
			},
		],
		backgroundColor: halo.interpolate({
			inputRange: [0, 1],
			outputRange: ['rgb(69,159,242)', 'white'],
		}),
	};

	return (
		<Animated.View>
			{showHalo && <Animated.View style={StyleSheet.flatten(haloStyles)} />}
			<FlipCard
				friction={18}
				flipHorizontal
				useNativeDriver
				clickable={false}
				perspective={1000}
				flipVertical={false}
				flip={isFlipped}
				style={styles.flipContainer}
			>
				{/* Face Side */}
				<View style={StyleSheet.flatten([styles.cardShadow, styles.cardFace])}>
					<View style={styles.faceContent}>
						<TextComponent
							align={'center'}
							font={'mSemiBold'}
							color={'black'}
							size="subtitle"
							text={word}
						/>
					</View>
				</View>
				{/* Back Side */}
				<View style={StyleSheet.flatten([styles.cardShadow, styles.cardBack])}>
					<View style={styles.backContent}>
						<TextComponent
							align={'center'}
							font={'mSemiBold'}
							color={'black'}
							size="subtitle"
							text={renderCardBackSide()}
						/>
					</View>
					{Platform.OS === 'android' && <View style={styles.fixIntroCardImageClipping} />}
				</View>
			</FlipCard>
		</Animated.View>
	);
};

const Tinycard = ({ word, setTranslation, translation, onDrag, setTitle, title, setWords }) => {
	useEffect(() => {
		setTitle(title);
		setWords(word);
		setTranslation(translation);
	}, []);
	const pan = useRef(new Animated.ValueXY()).current;
	const [isFlipped, setIsFlipped] = useState(false);
	const [isShowingTutorial, setIsShowingTutorial] = useState(false);
	const [isShowingHalo, setIsShowingHalo] = useState(true);
	const isFlippedFirstTime = useRef(false);
	const timeoutId = useRef(null);
	const mover = Animated.event([null, { dx: pan.x, dy: pan.y }]);
	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				if (!isFlippedFirstTime.current) {
					timeoutId.current = setTimeout(() => {
						setIsShowingTutorial(true);
					}, 3000);
				}
			},
			onPanResponderMove: (e, gestureState) => {
				if (!isFlippedFirstTime.current) return;
				if (isShowingTutorial) setIsShowingTutorial(false);
				clearTimeout(timeoutId.current);
				return mover(e, gestureState);
			},
			onPanResponderRelease: (e, { vx, vy, dx, dy }) => {
				if (!isFlippedFirstTime.current || (Math.abs(dx) <= 1 && Math.abs(dy) <= 1)) {
					setIsFlipped(!isFlipped);
					setIsShowingHalo(false);
					isFlippedFirstTime.current = true;
					return;
				}
				const velocityVectorLength = Math.sqrt(vx * vx + vy * vy);
				if (velocityVectorLength > 0.5) {
					const x = vx / velocityVectorLength;
					const y = vy / velocityVectorLength;
					Animated.decay(pan, { velocity: { x, y } }).start();
				} else {
					Animated.spring(pan, { toValue: { x: 0, y: 0 }, friction: 4 }).start();
				}

				// Calculate direction and distance of movement
				let direction = '';
				let distanceX = Math.abs(dx);
				let distanceY = Math.abs(dy);
				if (distanceX > distanceY && dx > 0) {
					direction = 'right';
				} else if (distanceX > distanceY && dx < 0) {
					direction = 'left';
				} else if (distanceY > distanceX && dy > 0) {
					direction = 'down';
				} else if (distanceY > distanceX && dy < 0) {
					direction = 'up';
				}

				// Call the callback with direction and distance
				if (direction !== '') {
					const distance = Math.sqrt(dx * dx + dy * dy);
					// Assuming you have a prop named "onDrag" that receives the direction and distance
					onDrag({ direction, distance });
				}
			},
		}),
	).current;

	const [translateX, translateY] = [pan.x, pan.y];
	const rotate = pan.x.interpolate({ inputRange: [-200, 0, 200], outputRange: ['-30deg', '0deg', '30deg'] });
	const animatedCardStyles = { transform: [{ translateX }, { translateY }, { rotate }] };
	return (
		<View style={styles.container}>
			<Animated.View style={animatedCardStyles} {...panResponder.panHandlers}>
				<Card word={word} translation={translation} showHalo={isShowingHalo} isFlipped={isFlipped} />
			</Animated.View>
		</View>
	);
};

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export default function ExampleScreen(props) {
	const [currentCard, setCurrentCard] = useState(0);
	const [title, setTitle] = useState('title');
	const [words, setWords] = useState('');
	const [translation, setTranslation] = useState('');

	const shuffledArray = shuffleArray(data);

	useEffect(()=>{
		// Speech.setSpeechRate(0.5);

	}, [])
	return (
		<React.Fragment>
			<View
				style={[
					{ zIndex: 100, backgroundColor: 'black', position: 'absolute', width: screenWidth, top: 150 },
					styles.row,
					styles.baseBottomMargin,
					styles.baseVerticalPadding,
					styles.centerObjects,
				]}
			>
				<TextComponent font={'mSemiBold'} color={'white'} size="huge" text={title} />
			</View>
			<View style={[styles.container, { backgroundColor: 'black' }]}>
				{shuffledArray.map((item, index) => {
					return index === currentCard ? (
						<View key={String(item.id)} style={{ width: screenWidth, height: screenHeight }}>
							<Tinycard
								setWords={setWords}
								setTranslation={setTranslation}
								setTitle={setTitle}
								title={item.time}
								word={item.en}
								translation={item.es}
								onDrag={({ direction }) => {
									if (direction == 'left' || direction == 'up') {
										if (currentCard === 0) {
											return;
										} else {
											setCurrentCard(currentCard - 1);
										}
									}
									if (direction == 'right' || direction == 'down') {
										if (currentCard === shuffledArray.length - 1) {
											return;
										} else {
											setCurrentCard(currentCard + 1);
										}
									}
								}}
							/>
						</View>
					) : null;
				})}
			</View>
			<View
				style={[
					{ zIndex: 100, backgroundColor: 'black', position: 'absolute', width: screenWidth, bottom: 50 },
					styles.row,
					styles.baseBottomMargin,
					styles.baseVerticalPadding,
					styles.justifyContentSpaceEvenly,
				]}
			>
				<Feather
					onPress={() => {
						if (currentCard === 0) {
							return;
						} else {
							setCurrentCard(currentCard - 1);
						}
					}}
					name="arrow-left"
					size={50}
					color="white"
				/>
				<Feather
					onPress={() => {
						Speech.speak(words, { volume: 1, language: 'en' });
					}}
					name="message-circle"
					size={50}
					color="white"
				/>
				<Feather
					onPress={() => {
						Speech.speak(translation, { volume: 1, language: 'es' });
					}}
					name="message-square"
					size={50}
					color="white"
				/>

				<Feather
					onPress={() => {
						if (currentCard === shuffledArray.length - 1) {
							return;
						} else {
							setCurrentCard(currentCard + 1);
						}
					}}
					name="arrow-right"
					size={50}
					color="white"
				/>
			</View>
		</React.Fragment>
	);
}
