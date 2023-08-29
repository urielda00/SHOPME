import axios from "axios"


export const removeItemAPI = (item, userName) => {
  axios.post("http://localhost:5000/cart/removeItem",{
    userName,
    item
  })
  .then((res) => {
    console.log('its ok item removed from cart',res);
  }).catch((error)=>{
    console.log('error in remove item from cart:',error);
  });
};