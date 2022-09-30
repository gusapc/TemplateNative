import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';
import { useApiSimpleObj } from '../../hooks';
import { PrimaryBtn } from '../../components';
import styles from './HomeScreenStyle';

export default function HomeScreen (props) {
	const authLoader = useApiSimpleObj('AUTH');
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>HomeScreen</Text>
			<PrimaryBtn text={'cerrar sesion'} onPress={() => authLoader.setData({ token: '' })}/>
		</View>
	);
}




