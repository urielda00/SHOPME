import axios from "axios"

// CREATE ORDER:
export const createOrderAPI = (address,products,userName)=>{
  axios.post("http://localhost:5000/order/createOrder",{
    userName,
    address,
    products
  })
  .then((res)=>{console.log('res:',res.data)})
  .catch((error)=>{
    console.log('error in addToCartAPI:',error);
  });
};






// // Add item to the cart:
// export const addToCartAPI = (itemData,userName) => {

//   axios.post("http://localhost:5000/cart/addToCart",{
//     userName,
//     itemData,
//   })
//   .catch((error)=>{
//     console.log('error in addToCartAPI:',error);
//   });
// };

// // Update item that already in the cart:
// export const updateInAddToCartAPI = (itemId,userName,totalPrice) => {

// axios.post("http://localhost:5000/cart/updateInAddToCart",{
//   userName,
//   itemId,
//   totalPrice
// })
// .catch((error)=>{
//   console.log('error in updateInAddToCartAPI:',error);
// });
// };