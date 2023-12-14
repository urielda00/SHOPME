import { createSlice } from '@reduxjs/toolkit';

// API's function- in case the user is logged in- to affect on the mongoDB:
import { createOrderAPI } from '../services/Checkout/checkout';
import { createOrderNoUserAPI } from '../services/Checkout/notLoggedCheckOut';

// Indication if the user is logged. and the userName to search in the server for the user Id:
const isLogged = window.sessionStorage.getItem('isLogged');
const userName = window.sessionStorage.getItem('userName');

interface InitialStateType {
	test: string;
}

const initialState: InitialStateType = {
	test: 'test',
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		placeOrder: (state, action) => {
			isLogged === 'true'
				? createOrderAPI(action.payload.isAddress, action.payload.cart, action.payload.userName)
				: createOrderNoUserAPI(action.payload.isAddress, action.payload.cart);
		},
	},
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
