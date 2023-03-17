import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ApplicationStyles } from '../../styles';
const screenWidth = Dimensions.get('window').width;

const getIntroductionCardWidth = () => screenWidth * 0.7;
const getIntroductionCardHeight = () => Math.round(getIntroductionCardWidth() / 0.875);
const getIntroductionCardBorderRadius = () => Math.round(getIntroductionCardHeight() / 16);

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: getIntroductionCardWidth() - 16 * 2, // Image should be smaller because cardSides have margin
		height: getIntroductionCardHeight() - 16 * 2,
		borderRadius: getIntroductionCardBorderRadius(),
		backgroundColor: '#FFF',
		padding: 16,
	},
	flipContainer: {
		flex: 0,
		borderWidth: 0,
		width: getIntroductionCardWidth(),
		height: getIntroductionCardHeight(),
	},
	cardShadow: {
		backgroundColor: '#FFF',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowRadius: 4.0,
				shadowOpacity: 0.2,
			},
			android: {
				elevation: 2,
			},
		}),
	},
	cardFace: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 16,
		paddingHorizontal: 8,
		borderRadius: getIntroductionCardBorderRadius(),
	},
	cardBack: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 16,
		paddingHorizontal: 8,
		borderRadius: getIntroductionCardBorderRadius(),
	},
	faceContent: {
		flexDirection: 'row',
	},
	backContent: {
		alignItems: 'center',
	},
	fixIntroCardImageClipping: {
		position: 'absolute',
		top: -getIntroductionCardBorderRadius(),
		bottom: -getIntroductionCardBorderRadius(),
		right: -getIntroductionCardBorderRadius(),
		left: -getIntroductionCardBorderRadius(),
		borderRadius: getIntroductionCardBorderRadius(),
		borderWidth: getIntroductionCardBorderRadius(),
		borderColor: '#F8F8F8',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tutorialContainer: {
		height: 60, // Set fixed height to avoid jitter on render
	},
});
