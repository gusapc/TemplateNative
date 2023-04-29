import React, {
	useEffect,
	useState
} from 'react';
import { Text, View } from 'react-native';
import PrimaryBtn from '../../components/PrimaryBtn'
import styles from './HomeScreenStyle';

export default function HomeScreen({ navigation }) {
	return (
		<View style={[styles.container, { backgroundColor: 'black', justifyContent: 'center' }]}>
			<View style={[styles.baseVerticalMargin, styles.fullWidth]} >
				<PrimaryBtn bgColor={'white'} colorText={'black'} onPress={() => navigation.navigate('Apendix1Screen')} text={'Apendix 1'} />
			</View>
			<View style={[styles.baseVerticalMargin, styles.fullWidth]} >
				<PrimaryBtn bgColor={'white'} colorText={'black'} onPress={() => navigation.navigate('Apendix2Screen')} text={'Apendix 2'} />
			</View>
			<View style={[styles.baseVerticalMargin, styles.fullWidth]} >
				<PrimaryBtn bgColor={'white'} colorText={'black'} onPress={() => navigation.navigate('Apendix3Screen')} text={'Apendix 3'} />
			</View> 
		</View>
	);
}




