import React from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './WebSectionStyle';
import { useWindowDimensions } from 'react-native';
import { Metrics } from '../../styles';
export default function WebSection({ image, children }) {
	const { height, width } = useWindowDimensions();

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
				<View
					style={{
						width,
						height: height - (Metrics.navBarHeight*2),
					}}
				>
					{children}
				</View>
				<View
					style={{
						width,
						height: Metrics.navBarHeight,
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
