import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
const rootReducer = combineReducers({
	Hue: SimpleObjectReducer('HUE'),
	AppendixOne: SimpleObjectReducer('APPENDIX_ONE'),
	AppendixTwo: SimpleObjectReducer('APPENDIX_TWO'),
	AppendixThree: SimpleObjectReducer('APPENDIX_THREE'),
	Config: SimpleObjectReducer('CONFIG'),
});

export default rootReducer;