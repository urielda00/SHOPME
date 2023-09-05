import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface InitialStateType {
  isAddress : {
  FirstName : string |undefined,
  LastName : string |undefined,
  AddressLine : string |undefined,
  City : string |undefined,
  Region : string |undefined,
  Zip :  undefined |string,
  Country :  undefined |string,
}
};


const initialState:InitialStateType  = {
  isAddress :{
  FirstName : 'test',
  LastName : 'test',
  AddressLine : 'test',
  City : 'test',
  Region : 'test',
  Zip : 'test',
  Country : 'test'
 }
} as InitialStateType;

const addressSlice = createSlice({
  name :'address',
  initialState,
  reducers:{
    isAddress: (state,action)=>{
      state.isAddress = action.payload
    },
  }
});


export const {isAddress}= addressSlice.actions;
export default addressSlice.reducer