import { StyleSheet } from 'react-native'; 
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	 ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	btn1:{
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 24,
	},
	top1: {
		marginTop: 38,
	},
	btn2:{
		justifyContent: 'space-around',
		alignItems: 'center',
		marginVertical: 24,
	}
});
