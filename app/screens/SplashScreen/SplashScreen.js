import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './SplashScreenStyle';

export default function SplashScreen (props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>SplashScreen</Text>
		</View>
	);
}




