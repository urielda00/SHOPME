import axios from "axios"


export const removeItemAPI = (item, userName) => {
  axios.post("http://localhost:5000/cart/removeItem",{
    userName,
    item
  })
  .catch((error)=>{
    console.log('error in remove item from cart:',error);
  });
};