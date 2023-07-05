import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';

import styles from './SplashScreenStyle';

export default function SplashScreen (props) {
	return (
		<View style={[styles.container, { backgroundColor: 'blue'}]}>
			<Text>SplashScreen</Text>
		</View>
	);
}




