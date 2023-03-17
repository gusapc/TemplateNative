import React, { useEffect, useState } from 'react';
import styles from './ExampleScreenStyle';
import sentences from './sentences3';
import originVerbs from './originVerbs';

// import sentences from './sentences';
// import sentences from './sentences';
import verbs from './data3';
import TextComponent from '../../components/TextComponent';
import { View, Dimensions, SafeAreaView, Text, ScrollView } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';



const highlightKeywords = (texts, fullVerbs) => {
	return texts.map((text, index) => {
		const words = text.split(' ');
		const highlightedWords = words.map((word, wordIndex) => {
			if (fullVerbs.includes(word)) {
				return (
					<Text key={wordIndex} style={{ textDecorationLine: 'underline', color: '#4E93CE' }}>
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

export default function ExampleScreen(props) {
	const [list, setList] = useState([]);
	const [listRandom, setListRandom] = useState([]);
	const [current, setCurrent] = useState(0);
	const [showTitle, setShowTitle] = useState(!false);
	const [fullVerbs, setFullVerbs] = useState(false);
	const [isRandom, setIsRandom] = useState(false);
	const [randomIndex, setRandomIndex] = useState([]);

	const shuffleArray = (array) => {
		const newArray = [...array];
		const indices = newArray.map((_, i) => i);
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
			[indices[i], indices[j]] = [indices[j], indices[i]];
		}
		setRandomIndex(indices);

		return newArray;
	};

	const capitalizeFirstLetter = (arr) => arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
	const toPlural = (arr) => arr.map((i) => `${i}s`);

	useEffect(() => {
		const cap = capitalizeFirstLetter(verbs);
		const dataToPloral = toPlural(verbs);
		const capToPloral = toPlural(cap);
		setFullVerbs(verbs.concat(capToPloral).concat(dataToPloral).concat(cap));
		setListRandom(shuffleArray(sentences));
		setList(sentences);
	}, []);

	let currentList = isRandom ? listRandom : list;
	let currentItem = [];
	if (currentList.length > 0) {
		currentItem = Object.entries(currentList[current]).flat();
	}
	if (!showTitle) {
		currentItem = currentItem.filter((item, index) => index % 2 === 1);
	}
	const highlightedTexts = highlightKeywords(currentItem, fullVerbs);

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
				<ScrollView>{highlightedTexts.map(renderItem)}</ScrollView>
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
					<AntDesign onPress={() => setCurrent(list.length - 1)} name="stepforward" size={30} color="white" />
				</View>
				<View
					style={[
						{ backgroundColor: 'black', width: screenWidth },
						styles.row,
						styles.justifyContentSpaceEvenly,
					]}
				>
					<MaterialIcons
						onPress={() => setIsRandom(!isRandom)}
						name={isRandom ? 'update' : 'update-disabled'}
						size={30}
						color="white"
					/>
					<Entypo
						onPress={() => setShowTitle(!showTitle)}
						name={showTitle ? 'eye' : 'eye-with-line'}
						size={30}
						color="white"
					/>
					<Entypo
						onPress={() => setListRandom(shuffleArray(sentences))}
						name={'shuffle'}
						size={30}
						color="white"
					/>
				</View>
				<TextComponent
					size="subtitle"
					align={'left'}
					font={'fMedium'}
					color={'white'}
					text={`${current + 1} / ${list.length}`}
				/>
			</SafeAreaView>
		</View>
	);
}
