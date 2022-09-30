import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './HomeWebPageScreenStyle';

export default function HomeWebPageScreen (props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>HomeWebPageScreen</Text>
		</View>
	);
}




