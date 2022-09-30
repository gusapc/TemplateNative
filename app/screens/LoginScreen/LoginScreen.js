import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';
import { useApiSimpleObj } from '../../hooks';
import styles from './LoginScreenStyle';
import { PrimaryBtn } from '../../components';

export default function LoginScreen(props) {
	const authLoader = useApiSimpleObj('AUTH');
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>LoginScreen</Text>
			<PrimaryBtn text={'iniciar sesion'} onPress={() => authLoader.setData({ token: 'token' })} />
		</View>
	);
}
