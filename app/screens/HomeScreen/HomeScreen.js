import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, SafeAreaView,Button } from 'react-native';

import styles from './HomeScreenStyle';
import useGetContext from '../../hooks/useGetContext';

export default function HomeScreen ({navigation, route}) {
	const { isLoading, setIsloading, handleToken } = useGetContext() 

	return (
		<View style={styles.container}>
			<SafeAreaView> 
			 
			<Button
				title="goBack"
				onPress={handleToken}
			/>
			</SafeAreaView>
		</View>
	);
}




