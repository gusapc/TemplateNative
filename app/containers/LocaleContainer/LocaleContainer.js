import React, { useEffect, useState, useMemo } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import es from '../../locales/es';
import en from '../../locales/en';
import { useApiSimpleObj } from '../../hooks';
i18n.fallbacks = true;
i18n.translations = { en, es };

export default function LocaleContainer({ children }) {
	let { data, setData } = useApiSimpleObj('CONFIG');
	const [locale, setLocale] = useState('es');
	useEffect(() => {
		if (data?.currentLocal) setLocale(data.currentLocal);
		else {
			let translations = 'es'
			setLocale(translations);
			setData({ currentLocal: translations });
		}
	}, []);

	useEffect(() => {
		if (!!locale) setData({ currentLocal: locale });
	}, [locale]);

	const localization = useMemo(
		() => ({
			t: (scope, options) => i18n.t(scope, { locale, ...options }),
			locale,
			setLocale,
		}),
		[locale],
	);
	return children(localization);
}
