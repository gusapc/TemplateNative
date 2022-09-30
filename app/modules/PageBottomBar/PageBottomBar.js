import React from 'react';
import { View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './PageBottomBarStyle';
import { Metrics } from '../../styles';
import { BottomBarIcons } from '../../components';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
 
export default function PageBottomBar(props) {
	const { images } = useTheme();
	const { width } = useWindowDimensions();
	
	return (
		<View
			style={[
				{
					backgroundColor: '#000',
					width: width,
					height: Metrics.navBarHeight,
					position: 'absolute',
					zIndex: 100,
					bottom: 0,
					left: 0,
					right: 0,
					flex: 1,
					justifyContent: 'space-between',
					alignContent: 'space-between',
					flexDirection: 'row',
				},
			]}
		>
			<BottomBarIcons
				isTop
				onPress={() => props.onPress('')}
				borderColor={props.currentPage === '' ? 'absWhite' : 'absBlack'}
				name={'Inicio'}
				iconName={'home'}
				size={30}
			/>
			<BottomBarIcons
				isTop
				onPress={() => props.onPress('product')}
				borderColor={props.currentPage === 'product' ? 'absWhite' : 'absBlack'}
				name={'Productos'}
				iconName={'tablet'}
				size={30}
			/>
			<BottomBarIcons
				isTop
				onPress={() => props.onPress('aboutus')}
				borderColor={props.currentPage === 'aboutus' ? 'absWhite' : 'absBlack'}
				name={'Nosotros'}
				iconName={'briefcase'}
				size={30}
			/>
			<BottomBarIcons
				isTop
				onPress={() => props.onPress('contact')}
				borderColor={props.currentPage === 'contact' ? 'absWhite' : 'absBlack'}
				name={'Contacto'}
				iconName={'mail'}
				size={30}
			/> 
		</View>
	);
}

PageBottomBar.propTypes = {
	// data: PropTypes.array
};

PageBottomBar.defaultProps = {
	// data: []
};
