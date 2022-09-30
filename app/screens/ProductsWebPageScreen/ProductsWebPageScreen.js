import React from 'react';
import { View } from 'react-native';
import { WebSection } from '../../components';
import styles from './ProductsWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';

export default function ProductsWebPageScreen() {
	const { images } = useTheme();
	const { width } = useWindowDimensions();

	return (
		<View style={styles.container}>
			<WebSection image={width < 665? images.screen5: images.productspage}></WebSection>
		</View>
	);
}

