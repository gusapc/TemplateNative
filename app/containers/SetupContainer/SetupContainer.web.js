import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import splashImg from '../../../assets/splash.png';
import * as Font from 'expo-font';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from '../../Store';
import { persistor } from '../../Store';
import {
	FiraSans_300Light,
	FiraSans_400Regular,
	FiraSans_500Medium,
	FiraSans_600SemiBold,
	FiraSans_700Bold,
	FiraSans_800ExtraBold,
	FiraSans_900Black,
} from '@expo-google-fonts/fira-sans';

import {
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_800ExtraBold,
	Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
function cacheFonts(fonts) {
	return fonts.map((font) => Font.loadAsync(font));
}

export default function SetupContainer(props) {
	const [isReady, setIsReady] = useState(false);
	let [fontsLoaded] = useFonts({
		FiraSans_300Light,
		FiraSans_400Regular,
		FiraSans_500Medium,
		FiraSans_600SemiBold,
		FiraSans_700Bold,
		FiraSans_800ExtraBold,
		FiraSans_900Black,
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_800ExtraBold,
		Montserrat_900Black,
	});
	useEffect(() => {
		SplashScreen.preventAutoHideAsync();
	}, []);
	const cacheResourcesAsync = async () => {
		try {
			const fontAssets = cacheFonts([Feather.font, Ionicons.font, MaterialCommunityIcons.font]);
			await Promise.all([...fontAssets]);
		} catch (error) {
			console.warn(error);
		} finally {
			setIsReady(true);
		}
	};
	if (!isReady || !fontsLoaded)
		return (
			<View style={{ width: '100%', height: '100%' }}>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={splashImg}
					onLoad={() => {
						SplashScreen.hideAsync();
						cacheResourcesAsync();
					}}
				/>
			</View>
		);
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{props.children}</PersistGate>
		</Provider>
	);
}
