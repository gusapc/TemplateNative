import { useContext } from 'react';
import { Context } from '../Context';

export default function (languageKey = null) {
	const context = useContext(Context);
	const { setLocale, locale } = context;
	const t = (text, disable = false, keys = {}) =>
		languageKey && !disable ? context.t(languageKey + '.' + text, keys) : context.t(text, keys);
	return { t, setLocale, locale };
}
