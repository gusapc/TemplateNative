import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'FullViosNative/app/styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	br: { borderRadius: 20, borderWidth: 1 },
	op: { opacity: 0.9 },
});
