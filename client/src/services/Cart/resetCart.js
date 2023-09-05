import axios from "axios"


export const resetCartAPI = (userName) => {
  axios.post("http://localhost:5000/cart/resetCart",{
    userName,
  })
  .catch((error)=>{
    console.log('error in reset cart:',error);
  });
};