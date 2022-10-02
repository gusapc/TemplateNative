import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel1,
	whitelist: ['Config'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(pReducer, compose(applyMiddleware(thunk)));

export default store;
export const persistor = persistStore(store);