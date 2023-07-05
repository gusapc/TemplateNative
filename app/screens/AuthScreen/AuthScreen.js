

import React, {
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';

import styles from './AuthScreenStyle';
import useGetContext from '../../hooks/useGetContext';

export default function AuthScreen({ navigation, route }) {
	const { isLoading, setIsloading, handleToken } = useGetContext()
console.log('1')
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<Button
					title="handleToken"
					onPress={handleToken}
				/>

			</SafeAreaView>
		</View>
	);
}




