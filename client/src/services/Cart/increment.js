import axios from "axios"


export const incrementCartAPI = (item, userName) => {
  axios.post("https://deployment-shopme.onrender.com/cart/incrementQuantity",{
    userName,
    item
  })
  .then((res) => {
    console.log('its ok cart incremented',res);
  }).catch((error)=>{
    console.log('error in increment cart:',error);
  });
};