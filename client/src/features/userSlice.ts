import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface InitialStateType {
  userId : string |undefined|boolean
  user : boolean |undefined
  loginError : any
  isAdmin : boolean |undefined
  profile : string
};


const initialState:InitialStateType  = {
  userId : false,
  user : false,
  loginError : null,
  isAdmin:false,
  profile : '' //here, the first letter of the userName will apear as a profile photo in mui avatar.
} as InitialStateType;

const userSlice = createSlice({
  name :'user',
  initialState,
  reducers:{
    logged: (state,action)=>{
      state.user = true;
      state.userId = action.payload;
      state.loginError = null;
      state.isAdmin = false;
      // window.localStorage.clear();  -to delete the local cart
    },
    errorLogged : (state,action: PayloadAction<string>)=>{
      state.user = false;
      state.loginError = action.payload;
      state.isAdmin = false;
      state.userId = false;
    },
    loggedOut : (state)=>{
      window.localStorage.clear();
      window.sessionStorage.clear();
      state.userId = false;
      state.user = false;
      state.loginError = null;
      window.location.replace('/login');
      state.isAdmin = false;
    },
    isAdmin:(state,action)=>{
      state.userId = action.payload;
      state.user = true;
      state.isAdmin = true;
      state.loginError = null;
    },
  }
});


export const {logged, errorLogged, loggedOut, isAdmin}= userSlice.actions;
export default userSlice.reducer