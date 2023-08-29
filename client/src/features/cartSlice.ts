import { createSlice} from "@reduxjs/toolkit";
import { resetCartAPI } from "../services/Cart/resetCart";
import { addToCartAPI,updateInAddToCartAPI } from "../services/Cart/addToCart";
import { incrementCartAPI } from "../services/Cart/increment";
import { decrementCartAPI1, decrementCartAPI2 } from "../services/Cart/decrement";
const isLogged = window.sessionStorage.getItem('isLogged');
const userName = window.sessionStorage.getItem('userName');

interface InitialStateType { 
  totalQuantity : number
  totalPrice : number
  warningMessage : null|string|boolean
  cart : any
};

const initialState:InitialStateType = {
  cart: [],
  totalQuantity: 0,
  totalPrice:0,
  warningMessage: false//make this array- and it will be looped in the map- make this as a different component!- widget one. and change the name to- login warning messages.
};



export const cartSlice= createSlice({
  name:'cart',
  initialState,
  reducers:{
  addToCart: (state,action:any)=>{
    //Check if the item already in the cart. if so - update the local. if user connected: update also API:
    const itemIndex = state.cart.findIndex((item:any)=>item._id === action.payload._id);
    if(itemIndex >= 0){
      if(state.cart[itemIndex].quantity - state.cart[itemIndex].itemQuantity >0){
      state.cart[itemIndex].itemQuantity++;
      state.totalPrice+=action.payload.price;
      // Call to the api if the user is loggged:
      isLogged === 'true' && updateInAddToCartAPI(action.payload._id,userName,action.payload.price)
      }else{
        state.warningMessage = `${action.payload.productName} is out of stock. The max is ${action.payload.quantity}`
      }
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
      // need to take the state.cart[itemIndex] id and send it to the backend
     state.cart[itemIndex].itemQuantity +=1; 
     state.totalPrice+=action.payload.price;
     // Call to the api if the user is loggged:
    isLogged === 'true' && incrementCartAPI( state.cart[itemIndex],userName)
    }else{
    state.warningMessage = `${action.payload.productName} is out of stock. The max is ${action.payload.quantity}`
    }
  },
  decrementQuantity: (state, action)=>{
    const itemIndex = state.cart.findIndex((item:any)=>item._id === action.payload._id);
    const itemLocation= state.cart[itemIndex];
    // if the item quantity in the cart is more then 1:
    if(itemLocation.itemQuantity>1){ 
      itemLocation.itemQuantity -=1;
      state.warningMessage= false;
      state.totalPrice-= itemLocation.price;
      // Call to the api if the user is loggged:
      isLogged === 'true' && decrementCartAPI1(state.cart[itemIndex],userName)

      // if the quantity in the cart is less then 1- remove the item from the cart:
     }else{
      // Call to the api if the user is loggged:
      isLogged === 'true' && decrementCartAPI2(state.cart[itemIndex],userName)
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
    state.warningMessage= false;
    state.cart.splice([itemIndex],1);
  },
  deleteAllCart: (state)=>{
    state.cart = [];
    state.totalPrice = 0;
    state.totalQuantity = 0;
    state.warningMessage= false;
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