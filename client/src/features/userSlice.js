import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  user : null,
  loginError : null,
  profile : '' //here, the first letter of the userName will apear as a profile photo in mui avatar.
};

const userSlice = createSlice({
  name :'user',
  initialState,
  reducers:{
    logged: (state)=>{
      state.user = true;
      state.loginError = null;
    },
    errorLogged : (state,action)=>{
      state.user = null;
      state.loginError = action.payload;
    },
    loggedOut : (state)=>{
      state.user = null;
      state.loginError = null;
    },
  }
});


export const {logged, errorLogged, loggedOut}= userSlice.actions;
export default userSlice.reducer