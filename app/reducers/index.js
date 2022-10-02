import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
const rootReducer = combineReducers({
	Config: SimpleObjectReducer('CONFIG'),
});

export default rootReducer;