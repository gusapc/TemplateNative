import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	button: {
		borderRadius: 12,
		width: '80%',
		paddingVertical: 10,
	},
});
