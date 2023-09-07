import axios from "axios";

export const resetCartAPI = (userName) => {
  axios
    .post("https://deployment-shopme.onrender.com/cart/resetCart", {
      userName,
    })
    .catch((error) => {
      console.log("error in reset cart:", error);
    });
};
