import Cart from "../models/Cart.js";
import Product from "../models/Products.js";
import User from "../models/User.js";

// להוסיף לוגר אחכ

export const updateInAddToCar = async (req,res) => {
try {
  // Find the user cart by his name => Id:
  const {userName, itemId, totalPrice} = req.body;
  const user = await User.findOne({userName});
  const userId = user._id;

  //find the item inside the user cart and update the quantity:
  await Cart.updateMany(
    {
      "userId": userId,
      "products._id": itemId
    },
    {
      $inc: {
        "products.$.itemQuantity": 1,
      }
    }
  );
  //also, update the total price of the user cart.
  await Cart.updateOne({userId},{
    $inc: {
      "totalPrice": Number(totalPrice),
    } 
  });

res.status(200).send('Item that already in the cart updated successfully');

} catch (error) {
  console.log('error in the update item in cart:',error.message);
  res.status(500).json(error.message)
}
};



export const addToCart = async(req,res) => {
try {
  // Find the userId using the userName:
  const {itemData,userName} = req.body;
  const user = await User.findOne({userName});
  const userId = user._id;
  const filteredItemObjToSave = {
   category: itemData.category,
   itemQuantity : 1,
   price: itemData.price,
   productName : itemData.productName,
   quantity: itemData.quantity,
   _id: itemData._id,
   image: itemData.image
  }; 


  const findUserCart = await Cart.findOne({userId});
  // If the user dont have cart create new cart:
  if(!findUserCart){
    const saveInCar= new Cart({
      userId,
      products:[filteredItemObjToSave],
      totalPrice : itemData.price,
      totalItemsInCart : 1,
     });
    await saveInCar.save();
    res.status(200).send('created new user cart')
  //If the user already have cart, update the cart: 
  }else{
   console.log('else');
  //  here need to increase the total quantity
  }

  

  console.log('itemData:',itemData);
  console.log('userName:',userName);
  
  // const {userId, product} = req.body;
  // //1. Check if the user already have cart in the DB:
  // const isUserCart= await Cart.findOne({ userId });

  // //2. If the user have cart - Check if the product is in the cart. else - create new cart:
  // if(isUserCart){
  //    const products = isUserCart.products;
  //    const productIndex = products.findIndex((item)=>item.id === product.productId); 

  //   // 3.Check if the item already exist:
  //    if(productIndex >= 0){
  //     //  The cart existing, and the product existing in the cart, so update the:
  //     //  itemQuantity- inside of the specific object inside of the products array, totalPrice:

  //     //  const newItemQuantity  = isUserCart.products[productIndex].itemQuantity + 1;
  //     //  console.log('isItem',newItemQuantity);
  //     //  const updateProduct = await Cart.find(
  //     //   {$and:[{userId},{products:{$in:["test"]}}]},
  //     //   // { $set: { "products.$[].itemQuantity": newItemQuantity }}    
  //     //   );
  //     //  console.log('updated',updateProduct);

  //     // return res.json(updateProduct)
  //     return res.send('the product  exist in the cart')
  //    }else{
  //     return res.send('the product dont exist in the cart')
  //    }
  // }else{
  //   return res.send('the user dont have an  existing cart')
  // }
  // let existingProductInCart= await Cart.findOne({ userId });
  // //2. If it exists then update its quantity and price else create a new product in the products array:
  // if (existingProductInCart){
    
  // }
} catch (error) {
  console.log('err in add to cart:',error.message);
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


export const testAdd = async(req,res)=>{
  try {
  //  Cart.updateOne({totalPrice:80},{$set: {addedtest:'someValue'}},{new: true})
  // const result = await Cart.updateOne({totalPrice:80},
  //    {
  //     $set: {
  //       someFiels: 'is this a test' ,
  //     }
  //    }  
  //  )
  const { itemId, quantity } = req.body;
  const result = await Cart.findOneAndUpdate(
    // The filter to find the document with the matching "name" in the array
    { "products.id": itemId },

    // The update operation
    {
      $set: {
        "products.$[elem].quantity": { $cond: [{ $gt: [{ $size: "$matchedObjects" }, 0] }, { $subtract: ["$matchedObjects.quantity", 1] }, quantity] }
      },
      $addToSet: {
        products: { $cond: [{ $gt: [{ $size: "$matchedObjects" }, 0] }, null, { itemId, quantity }] }
      }
    },

    // The options for findOneAndUpdate
    {
      arrayFilters: [{ "elem.id": itemId }],
      upsert: true, // Create the document if it doesn't exist
      returnOriginal: false // Return the updated document
    },
  );
  const shoe = await Cart.find({});
  res.status(200).json({shoe})
  } catch (error) {
    res.status(500).json(error.message);
  }
}