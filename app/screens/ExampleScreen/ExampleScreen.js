import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styles from './ExampleScreenStyle';
import sentences4 from './apendix2';
import originVerbs from './originVerbsApendix2';
import verbs from './dataApendix2';
import TextComponent from '../../components/TextComponent';
import { View, Dimensions, SafeAreaView, Text, ScrollView, Platform } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import useApiSimpleObj from '../../hooks/useApiSimpleObj';
import * as Speech from 'expo-speech';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';

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
			{index % 3 === 2 && (
				<View style={{ width: screenWidth, height: 2, backgroundColor: 'grey', marginVertical: 8 }} />
			)}
		</React.Fragment>
	);
};

export default function ExampleScreen(props) {
	const scrollViewRef = useRef();

	const hueLoader = useApiSimpleObj('HUE');
	const [list, setList] = useState([]);
	const [fullVerbs, setFullVerbs] = useState(false);
	const [isRandom, setIsRandom] = useState(false);

	let listRandom = hueLoader.data.listRandom;
	let randomIndex = hueLoader.data.randomIndex;
	let current = hueLoader.data.current || 0;

	const setCurrent = (n) => {
		hueLoader.setData({ current: n });
	};

	const shuffleArray = (array) => {
		const newArray = [...array];
		const indices = newArray.map((_, i) => i);
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
			[indices[i], indices[j]] = [indices[j], indices[i]];
		}
		hueLoader.setData({ randomIndex: indices });
		return newArray;
	};

	const capitalizeFirstLetter = (arr) => arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
	const toPlural = (arr) => arr.map((i) => `${i}s`);

	useEffect(() => {
		scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
	}, [current]);

	useEffect(() => {
		const enableSound = async () => {
			try {
				await Audio.setAudioModeAsync({
					allowsRecordingIOS: false,
					staysActiveInBackground: true,
					interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
					playsInSilentModeIOS: true,
					shouldDuckAndroid: true,
					interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS
					// allowsRecordingIOS: false,
					// interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
					// // interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
					// playsInSilentModeIOS: true,
					// interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
					// shouldDuckAndroid: true,
					// staysActiveInBackground: true,
					// playThroughEarpieceAndroid: true,
					// 	allowsRecordingIOS: false,
					// staysActiveInBackground: false,
					// interruptionModeIOS: InterruptionModeIOS.DoNotMix,
					// playsInSilentModeIOS: true,
					// shouldDuckAndroid: true,
					// interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
					// playThroughEarpieceAndroid: false,
				});
			} catch (error) {
				console.log({ error });
			}
		};
		enableSound();
	});

	useLayoutEffect(() => {
		const cap = capitalizeFirstLetter(verbs);
		const dataToPloral = toPlural(verbs);
		const capToPloral = toPlural(cap);
		setFullVerbs(verbs.concat(capToPloral).concat(dataToPloral).concat(cap));
		if (!hueLoader?.data?.listRandom) {
			hueLoader.setData({ listRandom: shuffleArray(sentences4) });
		}
		if (!hueLoader?.data?.current) {
			hueLoader.setData({ current: 0 });
		}
		setList(sentences4);
	}, []);

	let currentList = isRandom ? listRandom : list;
	const highlightedTexts = highlightKeywords(currentList[current], fullVerbs);

	return (
		<View style={[styles.container, { backgroundColor: 'black' }]}>
			<SafeAreaView style={[styles.container, { backgroundColor: 'black' }, styles.justifyContentSpaceBetween]}>
				<TextComponent
					size="subtitle"
					align={'left'}
					font={'fMedium'}
					color={'white'}
					text={isRandom ? originVerbs[randomIndex[current]] : originVerbs[current]}
				/>
				<View style={{ width: screenWidth, height: 2, backgroundColor: 'white', marginVertical: 8 }} />
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
						onPress={() => hueLoader.setData({ listRandom: shuffleArray(sentences4) })}
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
