

import React, {
	// useEffect, 
	// useState 

} from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';

import styles from './AuthScreenStyle';
import useGetContext from '../../hooks/useGetContext';
import { useApiSimpleObj } from '../../hooks';
import ApiService from '../../services/ApiService';
export default function AuthScreen({ navigation, route }) {
	const testLoader = useApiSimpleObj('TEST', 'getProfile', { data: 1 })
	const test2Loader = useApiSimpleObj('TEST', 'updateProfile', { data: 1, skip: true })

	// testLoader.fetch({})

	// ApiService.updateProfile({}).then(i => {
	// 	updateProfile.fetch()
	// })

	console.log({ date: testLoader?.data?.date })
	const { isLoading, setIsloading, handleToken } = useGetContext()
	console.log('1')
	return (
		<View style={[styles.container]}>
			<SafeAreaView>
				<Button
					title="handleToken"
					onPress={handleToken}
				/>
				<Text style={{ color: 'black' }} >{String(testLoader?.data?.date)} </Text>
				<Button
					title="setdata"
					onPress={() => {
						testLoader.setData({
							date: new Date()
						})
					}}
				/>
				<Button
					title="reset"
					onPress={() => {
						testLoader.reset()
					}}
				/>

			<Button
					title="next"
					onPress={() => navigation.navigate('ExampleScreen5')}
				/>
				<Button
					title="next"
					onPress={() => navigation.navigate('ExampleScreen3')}
				/><Button
				title="next"
				onPress={() => navigation.navigate('ExampleScreen4')}
			/>

			</SafeAreaView>
		</View>
	);
}




