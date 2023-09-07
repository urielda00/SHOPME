import axios from "axios";

export const incrementCartAPI = (item, userName) => {
  axios
    .post("https://deployment-shopme.onrender.com/cart/incrementQuantity", {
      userName,
      item,
    })
    .catch((error) => {
      console.log("error in increment cart:", error);
    });
};
