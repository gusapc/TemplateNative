import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from './screens';

const AppStack = createStackNavigator();

const AppNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }}>
		<AppStack.Screen name="ExampleScreen" component={ExampleScreen} />
	</AppStack.Navigator>
);

export default AppNavigator;