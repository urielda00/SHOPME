// The worst time complexity in this controller: O(1)

import Cart from "../models/Cart.js";
import User from "../models/User.js";
import { CartErrorLogger, CartInfoLogger } from "../middleware/winston.js";



// ADD ITEM TO CART:
export const addToCart = async(req,res) => {
  try {
    // Find the userId using the userName:
    const {itemData,userName} = req.body;
    const user = await User.findOne({userName});
    const userId = user._id;
    // The object to save inside of the cart at first:
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
      CartInfoLogger.log('info','Created new user cart! status code: 200');
      res.status(200).send('created new user cart')

    //If the user already have cart, update the cart: 
    }else{
      await Cart.updateOne(
        { userId },
        {
          $push: { products: filteredItemObjToSave }, // Add a new product object to the products array
          $inc: {
            "totalPrice": itemData.price,
            "totalItemsInCart" : 1,
          }
        }
      );
      CartInfoLogger.log('info','Add new item into user cart! status code: 200');
      res.status(200).send('add new item into user cart')
    }
  
  } catch (error) {
    CartErrorLogger.log('error',`${error.message}! status code: 500`);
    res.status(500).json(error.message)
  }
  };





// UPDATE ITEM IN CART:
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
  CartInfoLogger.log('info','Item in cart updated: 200');
  res.status(200).send('Item in cart updated');

} catch (error) {
  CartErrorLogger.log('error',`${error.message}! status code: 500`);
  res.status(500).json(error.message)
}};





// RESET CART:
export const resetCart = async (req,res) => {
try {
  const {userName} = req.body;
  const user = await User.findOne({userName});
  const userId = user._id;
  await Cart.deleteOne({userId})

  CartInfoLogger.log('info','Cart reseted successfuly! status code: 200');
  res.status(200).send('cart reseted successfuly')
}catch (error) {
  CartErrorLogger.log('error',`${error.message}! status code: 500`);
  res.status(500).json(error.message);
}};





// INCREMENT AMOUNT:
export const incrementQuantity = async (req,res) =>{
  try {
    const {item, userName} = req.body;
    const user = await User.findOne({userName});
    const userId = user._id;

    await Cart.updateOne(
      {
        userId,
        'products._id': item._id
      },
      {
        $inc: {
          "totalPrice": Number(item.price),
          "products.$.itemQuantity": 1,
        },
      }
    )
    CartInfoLogger.log('info','Incremented successfully! status code: 200');
    res.status(200).send('Incremented successfully')
  } catch (error) {
    CartErrorLogger.log('error',`${error.message}! status code: 500`);
    res.status(500).json(error.message);
  }
};





//1: DECREMENT AMOUNT - case there is more then 1 in the quantity
export const decrementQuantity1 = async (req,res) =>{
  try {
    const {item, userName} = req.body;
    
    const user = await User.findOne({userName});
    const userId = user._id;
    await Cart.updateOne(
      {
        userId,
        'products._id': item._id
      },
      {
        $inc: {
          "totalPrice": Number(-item.price),
          "products.$.itemQuantity": -1,
        },
      }
    );
    CartInfoLogger.log('info','Decremented1 successfully! status code: 200');
    res.status(200).send('Decremented1 successfully');
  } catch (error) {
    CartErrorLogger.log('error',`${error.message}! status code: 500`);
    res.status(500).json(error.message);
  }
};





//2: DECREMENT AMOUNT: - case there is less then 1 in the quantity (meaning remove the item from cart):
export const decrementQuantity2 = async (req,res) =>{
  try {
    const {item, userName} = req.body;
    const user = await User.findOne({userName});
    const userId = user._id;
    await Cart.updateOne(
      {
        userId
      },
      {
        $inc: {
            "totalPrice": Number(-item.price),
            "totalItemsInCart" : -1,
          },
        $pull: {
          products: { _id: item._id}
         }
      }
    );
    const checkEmptyCart = await Cart.findOne({userId});
    checkEmptyCart.totalItemsInCart == 0 && await Cart.deleteOne({userId})
    CartInfoLogger.log('info','Decremented2 successfully! status code: 200');
    res.status(200).send('Decremented2 successfully')
  } catch (error) {
    CartErrorLogger.log('error',`${error.message}! status code: 500`);
    res.status(500).json(error.message);
  }
};





// REMOVE ITEM:
export const removeItem = async (req,res) =>{
  try {
    const {item, userName} = req.body;
    const user = await User.findOne({userName});
    const userId = user._id;
    await Cart.updateOne(
      {
        userId
      },
      {
        $inc: {
            "totalPrice": Number(-item.price),
            "totalItemsInCart" : -1,
          },
        $pull: {
          products: { _id: item._id}
         }
      }
    );
    const checkEmptyCart = await Cart.findOne({userId});
    checkEmptyCart.totalItemsInCart == 0 && await Cart.deleteOne({userId})
    CartInfoLogger.log('info','Item removed successfully! status code: 200');
    res.status(200).send('Item removed successfully')
  } catch (error) {
    CartErrorLogger.log('error',`${error.message}! status code: 500`);
    res.status(500).json(error.message);
  }
};