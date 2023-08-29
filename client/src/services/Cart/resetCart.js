import axios from "axios"


export const resetCartAPI = (userName) => {
  axios.post("http://localhost:5000/cart/resetCart",{
    userName,
  })
  .then((res) => {
    console.log('its ok cart reseted',res);
  }).catch((error)=>{
    console.log('error in reset cart:',error);
  });
};