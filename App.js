import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/router';
import { SetupContainer } from './app/containers';
import { assetsLight, assetsDark } from './assets';
import { ContextProvider } from './app/Context';
 
export default function App() {
	return (
		<SetupContainer>
			<ContextProvider >
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
