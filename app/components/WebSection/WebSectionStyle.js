import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	topSpace: {
		position: 'absolute',
		backgroundColor: 'black',
		opacity: 0.8,
	},
});
