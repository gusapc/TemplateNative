import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import useGetContext from '../../hooks/useGetContext';
export default function AuthLoadingContainer(props) {
	const { handleToken, token, setToken, activeDarkTheme, isLoading, setIsloading, currentScreen, setCurrentScreen } = useGetContext()

	const navigation = useMemo(() => {
		if (isLoading) {
			console.log('splash')
			return 'splash'
		}
		if (token !== '' ){
			console.log('app')

			 return 'app'
			}
		return 'auth'
	}, [isLoading, token])

console.log({navigation, token, isLoading})
	return props[navigation];
} 