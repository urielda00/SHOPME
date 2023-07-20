import e from "express";
import Cart from "../models/Cart.js";
// להוסיף לוגר אחכ


export const addToCart = async(req,res) => {
try {
  const {userId, product} = req.body;
  //1. Check if the user already have cart in the DB:
  const isUserCart= await Cart.findOne({ userId });

  //2. If the user have cart - Check if the product is in the cart. else - create new cart:
  if(isUserCart){
     const products = isUserCart.products;
     const productIndex = products.findIndex((item)=>item.id === product.productId); 

    // 3.Check if the item already exist:
     if(productIndex >= 0){
      //  The cart existing, and the product existing in the cart, so update the:
      //  itemQuantity- inside of the specific object inside of the products array, totalPrice:

      //  const newItemQuantity  = isUserCart.products[productIndex].itemQuantity + 1;
      //  console.log('isItem',newItemQuantity);
      //  const updateProduct = await Cart.find(
      //   {$and:[{userId},{products:{$in:["test"]}}]},
      //   // { $set: { "products.$[].itemQuantity": newItemQuantity }}    
      //   );
      //  console.log('updated',updateProduct);

      // return res.json(updateProduct)
      return res.send('the product  exist in the cart')
     }else{
      return res.send('the product dont exist in the cart')
     }
  }else{
    return res.send('the user dont have an  existing cart')
  }
  let existingProductInCart= await Cart.findOne({ userId });
  //2. If it exists then update its quantity and price else create a new product in the products array:
  if (existingProductInCart){
    
  }
} catch (error) {
  console.log('errsds',error.message);
  res.status(500).json(error.message)
}
};


export const resetCart = async (req,res) => {
try {
  console.log('test');
}catch (error) {
  console.log('error',error.message);
  res.status(500).json(error.message);
}};



export const incrementQuantity = async (req,res) =>{
  try {
    console.log('test');
  } catch (error) {
    console.log('error',error.message);
    res.status(500).json(error.message);
  }
};


export const decrementQuantity = async (req,res) =>{
  try {
    console.log('test');
  } catch (error) {
    console.log('error',error.message);
    res.status(500).json(error.message);
  }
};



export const removeItem = async (req,res) =>{
  try {
    console.log('test');
  } catch (error) {
    console.log('error',error.message);
    res.status(500).json(error.message);
  }
};

  //  const updateProduct = await Cart.findOneAndUpdate(
      //   {"existingCartToUser.products.productId":product.id},
      //   {"$inc":{isItemQuantity:2}}
      //  ) 