import axios from "axios"


export const incrementCartAPI = (item, userName) => {
  axios.post("http://localhost:5000/cart/incrementQuantity",{
    userName,
    item
  })
  .catch((error)=>{
    console.log('error in increment cart:',error);
  });
};