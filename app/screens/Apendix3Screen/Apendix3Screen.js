import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styles from './Apendix3ScreenStyle';
import sentences4 from './dataapendix3';
import originVerbs from './originalverbs';
import verbs from './allverbsaprendix3';
import TextComponent from '../../components/TextComponent';
import { View, Dimensions, SafeAreaView, Text, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import useApiSimpleObj from '../../hooks/useApiSimpleObj';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';

const screenWidth = Dimensions.get('window').width;
const highlightKeywords = (texts = [], fullVerbs) => {
	return texts.map((text, index) => {
		const words = text.split(' ');
		const highlightedWords = words.map((word, wordIndex) => {
			if (fullVerbs.includes(word)) {
				return (
					<Text
						onPress={() => Speech.speak(word, { volume: 1, language: 'en' })}
						key={wordIndex}
						style={{ textDecorationLine: 'underline', color: '#4E93CE' }}
					>
						{word}{' '}
					</Text>
				);
			}
			return <Text key={wordIndex}>{word} </Text>;
		});
		return <Text key={index}>{highlightedWords}</Text>;
	});
};

const renderItem = (item, index) => {
	return (
		<React.Fragment key={String(index)}>
			<View style={[{ width: screenWidth }]}>
				<TextComponent
					styles={[styles.baseHorizontalPadding, styles.tinyVerticalPadding]}
					size="subtitle"
					align={'left'}
					font={'fMedium'}
					color={'white'}
					text={item}
				/>
			</View>
			{index % 2 === 1 && (
				<View style={{ width: screenWidth, height: 2, backgroundColor: 'grey', marginVertical: 8 }} />
			)}
		</React.Fragment>
	);
};

export default function Apendix3Screen({ navigation }) {
	const scrollViewRef = useRef();

	const appendixThreeLoader = useApiSimpleObj('APPENDIX_THREE');
	const [list, setList] = useState([]);
	const [fullVerbs, setFullVerbs] = useState(false);
	const [isRandom, setIsRandom] = useState(false);

	let listRandom = appendixThreeLoader.data.listRandom;
	let randomIndex = appendixThreeLoader.data.randomIndex;
	let current = appendixThreeLoader.data.current || 0;

	useEffect(() => {
		navigation.setOptions({
			title: isRandom ? originVerbs[randomIndex[current]] : originVerbs[current],
			headerBackTitle: ' '
		});
	}, [current]);



	const setCurrent = (n) => {
		appendixThreeLoader.setData({ current: n });
	};

	const shuffleArray = (array) => {
		const newArray = [...array];
		const indices = newArray.map((_, i) => i);
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
			[indices[i], indices[j]] = [indices[j], indices[i]];
		}
		appendixThreeLoader.setData({ randomIndex: indices });
		return newArray;
	};

	const capitalizeFirstLetter = (arr) => arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
	const toPlural = (arr) => arr.map((i) => `${i}s`);

	useEffect(() => {
		scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
	}, [current]);

	useEffect(() => {
		const configureAudioMode = async () => {
			try {
				await Audio.setAudioModeAsync({
					allowsRecordingIOS: false,
					playThroughEarpieceAndroid: false,
					staysActiveInBackground: false,
					shouldDuckAndroid: true,
					playsInSilentModeIOS: true,
				});
			} catch (error) {
				console.log('Error setting audio mode:', error);
			}
		};

		configureAudioMode();
	}, []);

	useLayoutEffect(() => {
		const cap = capitalizeFirstLetter(verbs);
		const dataToPloral = toPlural(verbs);
		const capToPloral = toPlural(cap);
		setFullVerbs(verbs.concat(capToPloral).concat(dataToPloral).concat(cap));
		if (!appendixThreeLoader?.data?.listRandom) {
			appendixThreeLoader.setData({ listRandom: shuffleArray(sentences4) });
		}
		if (!appendixThreeLoader?.data?.current) {
			appendixThreeLoader.setData({ current: 0 });
		}
		setList(sentences4);
	}, []);

	let currentList = isRandom ? listRandom : list;
	const highlightedTexts = highlightKeywords(currentList[current], fullVerbs);

	return (
		<View style={[styles.container, { backgroundColor: 'black' }]}>
			<SafeAreaView style={[styles.container, { backgroundColor: 'black' }, styles.justifyContentSpaceBetween]}>
				<ScrollView ref={scrollViewRef}>{highlightedTexts.map(renderItem)}</ScrollView>
				<View style={{ width: screenWidth, height: 2, backgroundColor: 'white', marginVertical: 8 }} />
				<View
					style={[
						{ backgroundColor: 'black', width: screenWidth },
						styles.row,
						styles.justifyContentSpaceEvenly,
						styles.baseVerticalMargin,
					]}
				>
					<AntDesign onPress={() => setCurrent(0)} name="stepbackward" size={30} color="white" />
					<MaterialIcons
						onPress={() => setIsRandom(!isRandom)}
						name={isRandom ? 'update' : 'update-disabled'}
						size={30}
						color="white"
					/>
					<AntDesign
						onPress={() => {
							if (current === 0) {
								return;
							} else {
								setCurrent(current - 1);
							}
						}}
						name="caretleft"
						size={30}
						color="white"
					/>
					<TextComponent
						size="subtitle"
						align={'left'}
						font={'fMedium'}
						color={'white'}
						text={`${current + 1} / ${list.length}`}
					/>
					<AntDesign
						onPress={() => {
							if (current === list.length - 1) {
								return;
							} else {
								setCurrent(current + 1);
							}
						}}
						name="caretright"
						size={30}
						color="white"
					/>
					<Entypo
						onPress={() => appendixThreeLoader.setData({ listRandom: shuffleArray(sentences4) })}
						name={'shuffle'}
						size={30}
						color="white"
					/>
					<AntDesign onPress={() => setCurrent(list.length - 1)} name="stepforward" size={30} color="white" />
				</View>
			</SafeAreaView>
		</View>
	);
}
