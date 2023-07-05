import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import locales from './utils/locales';
export const Context = createContext();


export const ContextProvider = ({ children, currentScreen, setCurrentScreen }) => {


	const [token, setToken] = useState('')
	const [isLoading, setIsloading] = useState(false)



	const activeDarkTheme = useSelector((state) => !!state?.Config?.data?.activeDarkTheme);
	const currentLanguage = useSelector((state) => state?.Config?.data?.currentLanguage || 'en');
	useEffect(()=>{
		locales.i18n.locale = currentLanguage;
	}, [currentLanguage])
	const handleToken = () => {
		setIsloading(true)
		if(token === '') setToken('toke')
		else setToken('')
		setTimeout(()=>{
			setIsloading(false)
		}, 1000)
	}
	const value = { handleToken, token, setToken, activeDarkTheme, isLoading, setIsloading, currentScreen, setCurrentScreen };


	

	return <Context.Provider value={value}>{children(value)}</Context.Provider>;
};
