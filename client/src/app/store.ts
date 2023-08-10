import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cartSlice';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';

const persistConfig = {
  key : 'root',
  version : 1 ,
  storage
};

const reducer = combineReducers({
  allCart: cartReducer,
  user :userReducer
});

const persistedReducer = persistReducer(persistConfig,reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })});


// export const store = configureStore({
//   reducer: {
//   allCart: cartReducer
//   },
// });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch