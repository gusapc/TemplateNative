import React from 'react';
import { View } from 'react-native';
import { WebSection } from '../../components';
import styles from './AboutUsWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
export default function AboutUsWebPageScreen() {
	const { images } = useTheme();

	return (
		<View style={styles.container}>
			<WebSection image={images.aboutuspage}></WebSection>
		</View>
	);
}

