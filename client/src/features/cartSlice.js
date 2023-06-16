import { createSlice, current  } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice:0,
  warningMessage: null //make this array- and it will be looped in the map- make this as a different component!- widget one.
};

export const cartSlice= createSlice({
  name:'cart',
  initialState,
  reducers:{
  addToCart: (state,action)=>{
    //check if the item already in the cart
    const itemIndex = state.cart.findIndex((item)=>item._id === action.payload._id);
    if(itemIndex>=0){
      state.cart[itemIndex].itemQuantity +=1;
    }else{
    //if not the item exist- push it to the cart.
    const tempProduct= {...action.payload,itemQuantity:1}
    state.cart.push(tempProduct);
    state.totalQuantity++;
    }
    state.totalPrice+=action.payload.price;
  }, 
  incrementQuantity: (state,action)=>{
    const itemIndex = state.cart.findIndex((item)=>item._id === action.payload._id);
    if(state.cart[itemIndex].quantity - state.cart[itemIndex].itemQuantity >0){
     state.cart[itemIndex].itemQuantity +=1; 
     state.totalPrice+=action.payload.price;
    }else{
    state.warningMessage = `The  ${action.payload.productName} in the stock is ${action.payload.quantity} units!`
    }
  },
  decrementQuantity: (state, action)=>{
    const itemIndex = state.cart.findIndex((item)=>item._id === action.payload._id);
    const itemLocation= state.cart[itemIndex];
    if(itemLocation.itemQuantity>1){ 
      itemLocation.itemQuantity -=1;
      state.warningMessage= null;
      state.totalPrice-= itemLocation.price;
     }else{
      state.cart.splice([itemIndex],1) 
      state.totalQuantity--;
      state.totalPrice -= itemLocation.price;
     }
  },
  removeItem: (state,action)=>{
    const itemIndex = state.cart.findIndex((item)=>item._id === action.payload._id);
    const itemLocation= state.cart[itemIndex];
    const totalPriceToRemove = itemLocation.itemQuantity * itemLocation.price;
    state.totalPrice -= totalPriceToRemove;
    state.totalQuantity -= 1;
    state.cart.splice([itemIndex],1);
  }
  }
})

export const {addToCart, incrementQuantity, decrementQuantity, removeItem}= cartSlice.actions;
export default cartSlice.reducer;