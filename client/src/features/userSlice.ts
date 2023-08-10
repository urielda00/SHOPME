import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../app/store";



interface InitialStateType {
  user : boolean |undefined
  loginError : any
  isAdmin : boolean |undefined
  profile : string
};


const initialState:InitialStateType  = {
  user : false,
  loginError : null,
  isAdmin:false,
  profile : '' //here, the first letter of the userName will apear as a profile photo in mui avatar.
} as InitialStateType;

const userSlice = createSlice({
  name :'user',
  initialState,
  reducers:{
    logged: (state)=>{
      state.user = true;
      state.loginError = null;
      state.isAdmin = false;
      // window.localStorage.clear();  -to delete the local cart
    },
    errorLogged : (state,action: PayloadAction<string>)=>{
      state.user = false;
      state.loginError = action.payload;
      state.isAdmin = false;
    },
    loggedOut : (state)=>{
      state.user = false;
      state.loginError = null;
      window.localStorage.clear();
      window.location.replace('/login');
      state.isAdmin = false;
    },
    isAdmin:(state)=>{
      state.user = true;
      state.isAdmin = true;
      state.loginError = null;
      // window.localStorage.clear();
    },
  }
});


export const {logged, errorLogged, loggedOut, isAdmin}= userSlice.actions;
export default userSlice.reducer