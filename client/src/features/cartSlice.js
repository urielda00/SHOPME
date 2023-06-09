import { createSlice} from "@reduxjs/toolkit";
// import ErrorMessages from "../widgets/Cart/ErrorMessages";

const initialState = {
  cart: [],
  // userName:'', //orr add later the- isLogged of boolean type.
  totalQuantity: 0,
  totalPrice:0,
  warningMessage: null//make this array- and it will be looped in the map- make this as a different component!- widget one.
};




export const cartSlice= createSlice({
  name:'cart',
  initialState,
  reducers:{
  addToCart: (state,action)=>{
    //check if the item already in the cart
    const itemIndex = state.cart.findIndex((item)=>item._id === action.payload._id);
    if(itemIndex>=0){
      state.cart[itemIndex].itemQuantity++;
      state.totalPrice+=action.payload.price;
    }else{
    //if not the item exist- push it to the cart.
    // const userNameIs= window.sessionStorage.getItem('userNameHere');
    const tempProduct= {...action.payload,itemQuantity:1}
    // state.userName = userNameIs
    state.cart.push(tempProduct);
    state.totalQuantity++;
    state.totalPrice+=action.payload.price;
    }
    
  }, 
  incrementQuantity: (state,action)=>{
    const itemIndex = state.cart.findIndex((item)=>item._id === action.payload._id);
    if(state.cart[itemIndex].quantity - state.cart[itemIndex].itemQuantity >0){
     state.cart[itemIndex].itemQuantity +=1; 
     state.totalPrice+=action.payload.price;
    }else{
    state.warningMessage = `${action.payload.productName} is out of stock. The max is ${action.payload.quantity}`
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
    state.warningMessage= null;
    state.cart.splice([itemIndex],1);
  },
  deleteAllCart: (state)=>{
    state.cart = [];
    state.totalPrice = 0;
    state.totalQuantity = 0;
  }
  },
})

export const {addToCart, incrementQuantity, decrementQuantity, removeItem, deleteAllCart, setCart}= cartSlice.actions;
export default cartSlice.reducer;