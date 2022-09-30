import React from 'react';
import { View } from 'react-native';
import { WebSection } from '../../components';
import styles from './ProductsWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
import {  useResponsive } from '../../hooks';

export default function ProductsWebPageScreen() {
	const { images } = useTheme();
	const { width } = useResponsive();

	return (
		<View style={styles.container}>
			<WebSection image={width < 665? images.screen5: images.productspage}></WebSection>
		</View>
	);
}

