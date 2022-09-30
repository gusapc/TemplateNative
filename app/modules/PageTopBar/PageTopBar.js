import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PageTopBarStyle';
import { Metrics } from '../../styles';
import { BottomBarIcons } from '../../components';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';

export default function PageTopBar(props) {
	const { images } = useTheme();
	const { width } = useWindowDimensions();
	const breakpointsMobile = 665;
	if (width <= breakpointsMobile)
		return (
			<View
				style={[
					{
						backgroundColor: '#000',
						width: width,
						height: Metrics.navBarHeight,
						position: 'absolute',
						zIndex: 100,
						flex: 1,
						left: 0,
						right: 0,
						justifyContent: 'space-between',
						alignContent: 'space-between',
						flexDirection: 'row',
					},
				]}
			>
				<BottomBarIcons
					isTop
					borderColor={'absBlack'}
					name={'English'}
					iconName={'language'}
					size={30}
					iconType="Ionicons"
				/>
				<View
					style={[
						{
							height: '100%',
							minWidth: Metrics.navBarHeight * 1.2,
						},
						styles.centerObjects,
					]}
				>
					<Image source={images.logo} style={{ height: '80%', width: '62%' }} />
				</View>

				<BottomBarIcons
					isTop
					onPress={props.onAccess}
					borderColor={'absBlack'}
					name={'Acceder'}
					iconName={'log-in'}
					size={30}
				/>
			</View>
		);

	return (
		<View
			style={[
				{
					backgroundColor: '#000',
					width: width,
					height: Metrics.navBarHeight,
					position: 'absolute',
					zIndex: 100,
					flex: 1,
					left: 0,
					right: 0,
					justifyContent: 'space-between',
					alignContent: 'space-between',
					flexDirection: 'row',
				},
			]}
		>
			<View
				style={[
					{
						height: '100%',
						minWidth: Metrics.navBarHeight * 1.2,
					},
					styles.centerObjects,
				]}
			>
				<Image source={images.logo} style={{ height: '80%', width: '62%' }} />
			</View>
			<View style={[styles.row]}>
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
				<BottomBarIcons
					isTop
					onPress={props.onAccess}
					borderColor={'absBlack'}
					name={'Acceder'}
					iconName={'log-in'}
					size={30}
				/>
				<BottomBarIcons
					isTop
					borderColor={'absBlack'}
					name={'English'}
					iconName={'language'}
					size={30}
					iconType="Ionicons"
				/>
			</View>
		</View>
	);
}

PageTopBar.propTypes = {
	// data: PropTypes.array
};

PageTopBar.defaultProps = {
	// data: []
};
