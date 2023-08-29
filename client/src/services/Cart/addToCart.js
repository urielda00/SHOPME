import axios from "axios"



// Add item to the cart:
export const addToCartAPI = (itemData,userName) => {

  axios.post("http://localhost:5000/cart/addToCart",{
    userName,
    itemData,
  })
  .then((res) => {
    console.log('its ok, added to cart',res);
  }).catch((error)=>{
    console.log('error in addToCartAPI:',error);
  });
};

// Update item that already in the cart:
export const updateInAddToCartAPI = (itemId,userName,totalPrice) => {

axios.post("http://localhost:5000/cart/updateInAddToCart",{
  userName,
  itemId,
  totalPrice
})
.then((res) => {
  console.log('its ok cart updated',res);
}).catch((error)=>{
  console.log('error in updateInAddToCartAPI:',error);
});
};