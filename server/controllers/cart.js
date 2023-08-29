import Cart from "../models/Cart.js";
import Product from "../models/Products.js";
import User from "../models/User.js";

// להוסיף לוגר אחכ

// ADD TO CART:
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
      await Cart.updateMany(  // change to update one? 
        { userId }, // Find the cart belong to the user.
        {
          $push: { products: filteredItemObjToSave }, // Add a new product object to the products array
          $inc: {
            "totalPrice": itemData.price,
            "totalItemsInCart" : 1,
          }
        }
      );
      res.status(200).send('add new item into user cart')
    }
  
  } catch (error) {
    console.log('err in add to cart:',error.message);
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

res.status(200).send('Item that already in the cart updated successfully');

} catch (error) {
  console.log('error in the update item in cart:',error.message);
  res.status(500).json(error.message)
}};


// RESET CART:
export const resetCart = async (req,res) => {
try {
  const {userName} = req.body;
  const user = await User.findOne({userName});
  const userId = user._id;
  await Cart.deleteOne({userId})
  res.status(200).send('cart reseted successfuly')
}catch (error) {
  console.log('error',error.message);
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
    res.status(200).send('incremented successfully')
  } catch (error) {
    console.log('error',error.message);
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
    res.status(200).send('decremented1 successfully')
  } catch (error) {
    console.log('error',error.message);
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
    res.status(200).send('decremented2 successfully')
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