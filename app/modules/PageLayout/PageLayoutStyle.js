import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../styles';
import { Metrics } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	topBar: {
		position: 'absolute',
		zIndex: 100,
		flex: 1,
		left: 0,
		right: 0,
		top: 0,
	},
	logo: {
		height: Metrics.navBarHeight,
		minWidth: Metrics.navBarHeight * 1.2,
	},
	logoImg: { height: '80%', width: '62%' },
	bottonTab: { position: 'absolute', zIndex: 100, flex: 1, left: 0, right: 0, bottom: 0 },
});
