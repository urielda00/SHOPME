import axios from "axios"

// Decrement if the quantity is more than 1:
export const decrementCartAPI1 = (item, userName) => {
  axios.post("http://localhost:5000/cart/decrementQuantity1",{
    userName,
    item,
  })
  .then((res) => {
    console.log('its ok cart decremented',res);
  }).catch((error)=>{
    console.log('error in decrement cart:',error);
  });
};

// Decrement if the quantity is less than 1:

export const decrementCartAPI2 = (item, userName) => {
  axios.post("http://localhost:5000/cart/decrementQuantity2",{
    userName,
    item, 
  })
  .then((res) => {
    console.log('its ok cart decremented2',res);
  }).catch((error)=>{
    console.log('error in decrement2 cart:',error);
  });
};