import { useContext, useEffect } from 'react';
import { Context } from '../../Context';
import { useApiSimpleObj } from '../../hooks';
export default function AuthLoadingContainer(props) {
	const { navigation, setNavigation } = useContext(Context);
	const authLoader = useApiSimpleObj('AUTH');

	useEffect(() => {
		setNavigation('Splash');
		setTimeout(() => {
			setNavigation(authLoader?.data?.token ? 'App' : 'Auth');
		}, 1000);
	}, [authLoader?.data?.token]);
	return props[navigation];
}
