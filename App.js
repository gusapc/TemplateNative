import React, {useRef, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/Router';
import './app/locales/moment-es';
import { SetupContainer } from './app/containers';
import { assetsLight, assetsDark } from './assets';
import { ContextProvider } from './app/Context';
import 'react-native-gesture-handler';

import locales from './app/utils/locales';
import es from './app/locales/es';
import en from './app/locales/en';
import { I18n } from 'i18n-js';
const translations = { es, en };
locales.i18n = new I18n(translations);
locales.i18n.enableFallback = true;

export default function App() {
	const [currentScreen, setCurrentScreen] = useState('Splash');

	const routeNameRef = useRef();
	const navigationRef = useRef();
	return (
		<SetupContainer>
			<ContextProvider currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} >
				{({ activeDarkTheme }) => (
					<View style={styles.container}>
						<NavigationContainer theme={activeDarkTheme ? assetsDark : assetsLight}
							ref={navigationRef}
							onReady={() => {
								return (routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name || '');
							}}
							onStateChange={async () => {
								const previousRouteName = routeNameRef.current;
								const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name || '';
								if (previousRouteName !== currentRouteName) {
									setCurrentScreen(currentRouteName);
								}
								routeNameRef.current = currentRouteName;
							}}

						>
							<AppNavigator />
						</NavigationContainer>
					</View>
				)}
			</ContextProvider>
		</SetupContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
