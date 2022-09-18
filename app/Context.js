import React, { createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import locales from './utils/locales';
export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const activeDarkTheme = useSelector((state) => !!state?.Config?.data?.activeDarkTheme);
	const currentLanguage = useSelector((state) => state?.Config?.data?.currentLanguage || 'en');
	useEffect(()=>{
		locales.i18n.locale = currentLanguage;
	}, [currentLanguage])
	let value = { activeDarkTheme };
	return <Context.Provider value={value}>{children(value)}</Context.Provider>;
};
