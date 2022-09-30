import React from 'react';
import { View } from 'react-native';
import { WebSection } from '../../components';
import styles from './HomeWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
export default function HomeWebPageScreen() {
	const { images } = useTheme();

	return (
		<View style={styles.container}>
			<WebSection image={images.homepage}></WebSection>
		</View>
	);
}
