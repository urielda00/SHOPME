import Cart from "../models/Cart.js";
import User from "../models/User.js";
import Product from "../models/Products.js";

export const addToCart= async(req,res)=>{
try {
  const {cart, userName, totalPrice} = req.body;
  const findUser = await Cart.findOne({userName});

  if(findUser){
    //if the user have cart so:
  const resultArray=[];
  for(let i=0;i<cart.length;i++){
   let productId= cart[i]._id;
   let productName= cart[i].productName;
   let itemQuantity= cart[i].itemQuantity;
   let shortDescription= cart[i].shortDescription;
   let price= cart[i].price;
   let image= cart[i].image;
   resultArray.push({productId, productName, itemQuantity,shortDescription, price, image}) 
  };
   await Cart.findOneAndUpdate({userName},
    {
      products:resultArray,
      totalPrice
    }
    
    )
  console.log(resultArray);
  res.status(201).json('user cart updated successfully')
  }else{
    //if the user doesn't have a cart:
    const resultArray=[];
    for(let i=0;i<cart.length;i++){
     let productId= cart[i]._id;
     let productName= cart[i].productName;
     let itemQuantity= cart[i].itemQuantity;
     let shortDescription= cart[i].shortDescription;
     let price= cart[i].price;
     let image= cart[i].image;
     resultArray.push({productId, productName, itemQuantity,shortDescription, price,image}) 
  };
    const createCart= new Cart({
      userName,
      products: resultArray,
      totalPrice 
    });
    await createCart.save();
    res.status(201).json('user cart created successfully')
  } 
} catch (error) {
  res.status(500).json({message:error.message});
}

}







