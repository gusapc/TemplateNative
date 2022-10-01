import React from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './WebSectionStyle';
import { useResponsive } from '../../hooks';
import { Metrics } from '../../styles';
export default function WebSection({ image, children }) {
	const { height, width, getSize, breaks } = useResponsive();
	return (
		<View style={getSize(width, height)}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<View style={[getSize(width, height), styles.topSpace]} />
				<View style={getSize(width, breaks[15])} />
				<ScrollView style={getSize(width, breaks[16])}>
					<View style={[getSize(width, breaks[16]), styles.justifyContentSpaceBetween]}>{children}</View>
				</ScrollView>
				<View style={getSize(width, breaks[17])} />
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
