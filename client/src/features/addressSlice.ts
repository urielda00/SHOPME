import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
	isAddress: {
		Zip: undefined | string;
		City: string | undefined;
		Region: string | undefined;
		Country: undefined | string;
		LastName: string | undefined;
		FirstName: string | undefined;
		AddressLine: string | undefined;
	};
}

const initialState: InitialStateType = {
	isAddress: {
		City: 'test',
		Zip: 'test',
		Region: 'test',
		Country: 'test',
		LastName: 'test',
		FirstName: 'test',
		AddressLine: 'test',
	},
} as InitialStateType;

const addressSlice = createSlice({
	name: 'address',
	initialState,
	reducers: {
		isAddress: (state, action) => {
			state.isAddress = action.payload;
		},
	},
});

export const { isAddress } = addressSlice.actions;
export default addressSlice.reducer;
