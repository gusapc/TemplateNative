import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/router';
import './app/locales/moment-es';
import { SetupContainer } from './app/containers';
import { assetsLight, assetsDark } from './assets';
import { ContextProvider } from './app/Context';

import locales from './app/utils/locales';
import es from './app/locales/es';
import en from './app/locales/en';
import { I18n } from 'i18n-js';
const translations = { es, en };
locales.i18n = new I18n(translations);
locales.i18n.enableFallback = true;

export default function App() {
	return (
		<SetupContainer>
			<ContextProvider>
				{({ activeDarkTheme }) => (
					<View style={styles.container}>
						<NavigationContainer theme={activeDarkTheme ? assetsDark : assetsLight}>
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
