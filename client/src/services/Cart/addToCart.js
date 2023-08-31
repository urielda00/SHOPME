import axios from "axios"



// Add item to the cart:
export const addToCartAPI = (itemData,userName) => {

  axios.post("https://deployment-shopme.onrender.com/cart/addToCart",{
    userName,
    itemData,
  })
  .catch((error)=>{
    console.log('error in addToCartAPI:',error);
  });
};

// Update item that already in the cart:
export const updateInAddToCartAPI = (itemId,userName,totalPrice) => {

axios.post("https://deployment-shopme.onrender.com/cart/updateInAddToCart",{
  userName,
  itemId,
  totalPrice
})
.catch((error)=>{
  console.log('error in updateInAddToCartAPI:',error);
});
};