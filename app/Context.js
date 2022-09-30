import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LocaleContainer } from './containers';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [navigation, setNavigation] = useState('Splash');
	const activeDarkTheme = useSelector((state) => !!state?.Config?.data?.activeDarkTheme);
	let value = { activeDarkTheme, navigation, setNavigation };
	return (
		<LocaleContainer>
			{(localization) => (
				<Context.Provider value={{ ...value, ...localization }}>{children(value)}</Context.Provider>
			)}
		</LocaleContainer>
	);
};
