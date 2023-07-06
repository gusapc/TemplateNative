import { useMemo } from 'react';
import useGetContext from '../../hooks/useGetContext';
export default function AuthLoadingContainer(props) {
	const { token, isLoading, } = useGetContext()

	const navigation = useMemo(() => {
		if (isLoading) {
			return 'splash'
		}
		if (token !== '') {
			return 'app'
		}
		return 'auth'
	}, [isLoading, token])
	return props[navigation];
} 