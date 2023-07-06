import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from './screens';
import HomeScreen from './screens/HomeScreen'
import AuthScreen from './screens/AuthScreen'
import SplashScreen from './screens/SplashScreen'
import AuthLoadingContainer from './containers/AuthLoadingContainer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const AppStack = createStackNavigator();
const SplashStack = createStackNavigator();
const FullStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AppNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'HomeScreen'} >
		{/* <AppStack.Screen name="ExampleScreen" component={ExampleScreen} /> */}
		<AppStack.Screen name="HomeScreen" component={HomeScreen} />
	</AppStack.Navigator>
);

const SplashNavigator = () => (
	<SplashStack.Navigator screenOptions={{ headerShown: false }}>
		<SplashStack.Screen name="SplashScreen" component={SplashScreen} />
	</SplashStack.Navigator>
);

const TabNavigator = () => {
	return (
		<Tab.Navigator >
			<Tab.Screen name="AuthScreen" component={AuthScreen} />
			<Tab.Screen name="ExampleScreen1" component={ExampleScreen} />
			<Tab.Screen name="ExampleScreen2" component={ExampleScreen} />
		</Tab.Navigator>
	)
}

const AuthNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="TabNavigator" component={TabNavigator} />
		</Drawer.Navigator>
	)

}

const FullNavigator = () => (
	<FullStack.Navigator screenOptions={{ headerShown: false }}>
		<FullStack.Screen name="AuthNavigator" component={AuthNavigator} />
		<FullStack.Screen name="ExampleScreen5" component={ExampleScreen} />
		<FullStack.Screen name="ExampleScreen3" component={ExampleScreen} />
		<FullStack.Screen name="ExampleScreen4" component={ExampleScreen} />
	</FullStack.Navigator>
);

const Switch = () => (
	<AuthLoadingContainer
		app={<AppNavigator />}
		auth={<FullNavigator />}
		splash={<SplashNavigator />}
	/>
)


export default Switch;