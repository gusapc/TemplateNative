import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
const rootReducer = combineReducers({
	Config: SimpleObjectReducer('CONFIG'),
	Auth: SimpleObjectReducer('AUTH'),
});

export default rootReducer;