import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from './screens';
import HomeScreen from './screens/HomeScreen'
import AuthScreen from './screens/AuthScreen'
import SplashScreen from './screens/SplashScreen'
import AuthLoadingContainer from './containers/AuthLoadingContainer'
const AppStack = createStackNavigator();
const SplashStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AppNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'HomeScreen'} >
		<AppStack.Screen name="ExampleScreen" component={ExampleScreen} />
		<AppStack.Screen name="HomeScreen" component={HomeScreen} />
	</AppStack.Navigator>
);

const SplashNavigator = () => (
	<SplashStack.Navigator screenOptions={{ headerShown: false }}>
		<SplashStack.Screen name="SplashScreen" component={SplashScreen} />
	</SplashStack.Navigator>
);

const AuthNavigator = () => {
	return (
		<AuthStack.Navigator screenOptions={{ headerShown: false }}>
			<AuthStack.Screen name="AuthScreen" component={AuthScreen} />
		</AuthStack.Navigator>
	);
}

const Switch = () => (
	<AuthLoadingContainer
		app={<AppNavigator />}
		auth={<AuthNavigator />}
		splash={<SplashNavigator />}
	/>
)


export default Switch;