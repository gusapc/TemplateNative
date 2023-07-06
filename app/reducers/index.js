import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
const rootReducer = combineReducers({
	Config: SimpleObjectReducer('CONFIG'),
	Test: SimpleObjectReducer('TEST'),
});

export default rootReducer;