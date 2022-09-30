import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthLoadingContainer } from '../containers';
import { HomeScreen, LoginScreen, PageScreen, SplashScreen } from '../screens';

const AppStack = createStackNavigator();

const AppNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }}>
		<AppStack.Screen name="HomeScreen" component={HomeScreen} />
	</AppStack.Navigator>
);
const SplashNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }}>
		<AppStack.Screen name="SplashScreen" component={SplashScreen} />
	</AppStack.Navigator>
);

const AuthNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }}>
		<AppStack.Screen name="PageScreen" component={PageScreen} />
		<AppStack.Screen name="LoginScreen" component={LoginScreen} />
	</AppStack.Navigator>
);

const Switch = () => (
	<AuthLoadingContainer App={<AppNavigator />} Auth={<AuthNavigator />} Splash={<SplashNavigator />} />
);

export default Switch;
