import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  user : null,
  loginError : null,
  isAdmin:null,
  profile : '' //here, the first letter of the userName will apear as a profile photo in mui avatar.
};

const userSlice = createSlice({
  name :'user',
  initialState,
  reducers:{
    logged: (state)=>{
      state.user = true;
      state.loginError = null;
      state.isAdmin = null;
      window.localStorage.clear();
    },
    errorLogged : (state,action)=>{
      state.user = null;
      state.loginError = action.payload;
      state.isAdmin = null;
    },
    loggedOut : (state)=>{
      state.user = null;
      state.loginError = null;
      window.localStorage.clear();
      window.location.replace('/login');
      state.isAdmin = null;
    },
    isAdmin:(state)=>{
      state.user = true;
      state.isAdmin = true;
      state.loginError = null;
      window.localStorage.clear();
    },
  }
});


export const {logged, errorLogged, loggedOut, isAdmin}= userSlice.actions;
export default userSlice.reducer