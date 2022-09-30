import React from 'react';
import { View } from 'react-native';
import { WebSection } from '../../components';
import styles from './ContactWebPageScreenStyle';
import { useTheme } from '@react-navigation/native';
export default function ContactWebPageScreen() {
	const { images } = useTheme();

	return (
		<View style={styles.container}>
			<WebSection image={images.contactpage}></WebSection>
		</View>
	);
}

