import { persistReducer } from 'redux-persist';
import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orderSlice';
import { combineReducers } from '@reduxjs/toolkit';
import addressReducer from '../features/addressSlice';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const reducer = combineReducers({
	allCart: cartReducer,
	user: userReducer,
	address: addressReducer,
	order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
