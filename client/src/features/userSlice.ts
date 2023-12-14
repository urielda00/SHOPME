import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
	profile: string;
	loginError: any;
	user: boolean | undefined;
	isAdmin: boolean | undefined;
	userId: string | undefined | boolean;
}

const initialState: InitialStateType = {
	profile: '',
	user: false,
	userId: false,
	isAdmin: false,
	loginError: null,
} as InitialStateType;

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logged: (state, action) => {
			state.user = true;
			state.isAdmin = false;
			state.loginError = null;
			state.userId = action.payload;
		},

		errorLogged: (state, action: PayloadAction<string>) => {
			state.user = false;
			state.userId = false;
			state.isAdmin = false;
			state.loginError = action.payload;
		},

		loggedOut: (state) => {
			state.user = false;
			state.userId = false;
			state.isAdmin = false;
			state.loginError = null;
			window.localStorage.clear();
			window.sessionStorage.clear();
			window.location.replace('/login');
		},

		isAdmin: (state, action) => {
			state.userId = action.payload;
			state.user = true;
			state.isAdmin = true;
			state.loginError = null;
		},
	},
});

export const { logged, errorLogged, loggedOut, isAdmin } = userSlice.actions;
export default userSlice.reducer;
