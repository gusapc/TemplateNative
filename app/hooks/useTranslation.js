import { useContext } from 'react';
import { Context } from '../Context';

export default function () {
	const { t, setLocale, locale } = useContext(Context);
	return { t, setLocale, locale };
}
