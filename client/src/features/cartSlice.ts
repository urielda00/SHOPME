import { createSlice} from "@reduxjs/toolkit";
import { resetCartAPI } from "../services/Cart/resetCart";
import { addToCartAPI,updateInAddToCartAPI } from "../services/Cart/addToCart";
const isLogged = window.sessionStorage.getItem('isLogged');
const userName = window.sessionStorage.getItem('userName');

interface InitialStateType { 
  totalQuantity : number
  totalPrice : number
  warningMessage : null|string
  cart : any
};

const initialState:InitialStateType = {
  cart: [],
  totalQuantity: 0,
  totalPrice:0,
  warningMessage: null//make this array- and it will be looped in the map- make this as a different component!- widget one. and change the name to- login warning messages.
};



export const cartSlice= createSlice({
  name:'cart',
  initialState,
  reducers:{
  addToCart: (state,action:any)=>{
    //Check if the item already in the cart. if so - update the local. if user connected: update also API:
    const itemIndex = state.cart.findIndex((item:any)=>item._id === action.payload._id);
    if(itemIndex >= 0){
      state.cart[itemIndex].itemQuantity++;
      state.totalPrice+=action.payload.price;
      // Call to the api if the user is loggged:
      isLogged === 'true' && updateInAddToCartAPI(action.payload._id,userName,action.payload.price)

    }else{
    // Add item to cart. if user connected: update also API:
    const tempProduct = {...action.payload,itemQuantity:1}
    state.cart.push(tempProduct);
    state.totalQuantity++;
    state.totalPrice+=action.payload.price;
    // Call to the api if the user is loggged:
    isLogged === 'true' && addToCartAPI(action.payload,userName)

    }
  }, 
  incrementQuantity: (state,action)=>{
    const itemIndex = state.cart.findIndex((item:any)=>item._id === action.payload._id);
    if(state.cart[itemIndex].quantity - state.cart[itemIndex].itemQuantity >0){
     state.cart[itemIndex].itemQuantity +=1; 
     state.totalPrice+=action.payload.price;
    }else{
    state.warningMessage = `${action.payload.productName} is out of stock. The max is ${action.payload.quantity}`
    }
  },
  decrementQuantity: (state, action)=>{
    const itemIndex = state.cart.findIndex((item:any)=>item._id === action.payload._id);
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
    const itemIndex = state.cart.findIndex((item:any)=>item._id === action.payload._id);
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
    // Call to the api if the user is loggged:
    isLogged === 'true' && resetCartAPI(userName)
  },
  setUserCart: (state,action)=>{
    state.cart = action.payload.cart;
    state.totalQuantity = action.payload.totalItemsInCart;
    state.totalPrice = action.payload.totalPrice;
    // state.totalPrice = 0;
    // state.totalQuantity = 0;
  }
  },
})

export const {addToCart, incrementQuantity, decrementQuantity, removeItem, deleteAllCart ,setUserCart}= cartSlice.actions;
export default cartSlice.reducer;



// Test- check this later:

// pullCartOnLogin : (state, action)=>{
//   // Check if there is cart:
//   if(Array.isArray(action.payload)){
//    state.cart = [];
//    state.userId= action.payload[1];
//    state.totalQuantity=0;
//    state.totalPrice=0;
//    state.warningMessage=null;
//   }else{
//    state.cart = action.payload.products;
//    state.userId = action.payload.userId;
//    state.totalQuantity = action.payload.totalQuantity;
//    state.totalPrice = action.payload.totalPrice;
//   }
//   }