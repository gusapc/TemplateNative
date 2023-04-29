import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import ExampleScreen from './screens/ExampleScreen';
import HomeScreen from './screens/HomeScreen';
import Apendix1Screen from './screens/Apendix1Screen';
import Apendix2Screen from './screens/Apendix2Screen';
import Apendix3Screen from './screens/Apendix3Screen';

const screenOptions = {
	headerStyle: {
		backgroundColor: 'black',
	},
	headerTintColor: 'white',
};

const AppStack = createStackNavigator();

const AppNavigator = () => (
	<AppStack.Navigator screenOptions={screenOptions}>
		<AppStack.Screen name="HomeScreen" component={HomeScreen} />
		<AppStack.Screen name="Apendix1Screen" component={Apendix1Screen} />
		<AppStack.Screen name="Apendix2Screen" component={Apendix2Screen} />
		<AppStack.Screen name="Apendix3Screen" component={Apendix3Screen} />
		<AppStack.Screen name="ExampleScreen" component={ExampleScreen} options={{headerBackTitle: ' '}} />
	</AppStack.Navigator>
);

export default AppNavigator;

const styles = StyleSheet.create({
	header: {
		backgroundColor: 'black',
	},
	title: {
		color: 'white',
	},
});
