import axios from "axios";

export const removeItemAPI = (item, userName) => {
  axios
    .post("https://deployment-shopme.onrender.com/cart/removeItem", {
      userName,
      item,
    })
    .catch((error) => {
      console.log("error in remove item from cart:", error);
    });
};
