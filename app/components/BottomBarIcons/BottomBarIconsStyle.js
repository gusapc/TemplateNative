import { StyleSheet } from 'react-native';
import { Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
		...ApplicationStyles.flexBox,
		space: { height: Metrics.navBarHeight, maxWidth: Metrics.navBarHeight * 1.2 },
		topBorder: { borderTopWidth: 2 },
		topBorderActive: { borderTopWidth: 2 },
		bottomBorder: { borderTopWidth: 0, borderBottomWidth: 2 },
		bottomBorderActive: { borderTopWidth: 2, borderBottomWidth: 0 },
});
