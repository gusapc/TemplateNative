import React from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './WebSectionStyle';
import {  useResponsive } from '../../hooks';
import { Metrics } from '../../styles';
export default function WebSection({ image, children }) {
	const { height, width } = useResponsive();
	return (
		<View style={{ width: width, height: height }}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<View
					style={{
						width: width,
						height: height,
						position: 'absolute',
						backgroundColor: 'black',
						opacity: 0.8,
					}}
				/>
				<View
					style={{
						width,
						height: Metrics.navBarHeight,
					}}
				/>
				<ScrollView
					style={{
						width,
						height: height+20 -  Metrics.navBarHeight * 2 ,
					}}
				>
					<View
						style={{
							width,
							minHeight: height+20 -  Metrics.navBarHeight * 2,  
							justifyContent:'space-between'
						}}
					>
						{children}
					</View>
				</ScrollView>
				<View
					style={{
						width,
						height: Metrics.navBarHeight-20,
					}}
				/>
			</ImageBackground>
		</View>
	);
}

WebSection.propTypes = {
	image: PropTypes.any,
};

WebSection.defaultProps = {
	image: null,
};
