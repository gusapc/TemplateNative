import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthLoadingContainer } from '../containers';
import {
	SplashScreen,
	HomeScreen,
	LoginScreen,
	AboutUsWebPageScreen,
	HomeWebPageScreen,
	ContactWebPageScreen,
	ProductsWebPageScreen,
} from '../screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PageLayout } from '../modules';

const AppStack = createStackNavigator();
const TopTabStack = createMaterialTopTabNavigator();

const PageNavigatir = () => (
	<TopTabStack.Navigator tabBar={(props) => <PageLayout {...props} />}>
		<TopTabStack.Screen name="HomeWebPageScreen" component={HomeWebPageScreen} />
		<TopTabStack.Screen name="ProductsWebPageScreen" component={ProductsWebPageScreen} />
		<TopTabStack.Screen name="AboutUsWebPageScreen" component={AboutUsWebPageScreen} />
		<TopTabStack.Screen name="ContactWebPageScreen" component={ContactWebPageScreen} />
	</TopTabStack.Navigator>
);

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
		<AppStack.Screen name="PageNavigatir" component={PageNavigatir} />
		<AppStack.Screen name="LoginScreen" component={LoginScreen} />
	</AppStack.Navigator>
);

const Switch = () => (
	<AuthLoadingContainer App={<AppNavigator />} Auth={<AuthNavigator />} Splash={<SplashNavigator />} />
);

export default Switch;
