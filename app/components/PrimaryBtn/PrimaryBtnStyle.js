import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	button: {
		borderRadius: 12,
		width: '80%',
		paddingVertical: 10,
	},
});
