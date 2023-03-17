import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
const rootReducer = combineReducers({
	Hue: SimpleObjectReducer('HUE'),
	Config: SimpleObjectReducer('CONFIG'),
});

export default rootReducer;