import { StyleSheet } from 'react-native'; 
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	group1: {
		width: '90%',
		height: '50%',
		minWidth: 427,
		minHeight: 286,
		marginTop: 64,
	},
	viosnameContent: { flex: 0.4, width: '100%' },
	section1: { height: '100%', minWidth: 330, flex: 1 },
	section2: { flex: 0.3, width: '100%' },
	store: { width: 200, minHeight: 100 },
	viosname: { marginTop: 150, width: '50%', minHeight: 100, minWidth: 350 },
	size5: { height: 5, width: 5 },
});
