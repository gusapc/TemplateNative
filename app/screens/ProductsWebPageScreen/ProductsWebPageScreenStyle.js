import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	 ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ecf0f1',
	  },
	  video: {
		alignSelf: 'center',
		width: 320,
		height: 200,
	  },
	  buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	  },
});
