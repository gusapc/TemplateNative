import { useContext } from 'react';
import { Context } from '../Context';

export default function () {
	const context = useContext(Context); 
	return context;
}