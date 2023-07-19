import Cart from "../models/Cart.js";
// להוסיף לוגר אחכ

export const addToCart = async(req,res) => {
try {
  // כעת נשלחת לכאן העגלה המעודכנת. לשמור רק את החלקים החשובים שבה במאגר
  // const {product,userId,totalQuantity} = req.body; //on the client- send the product to here
  const {product, userId, totalPrice, totalQuantity} = req.body;
  const resultCart = {
    company:product,
    // brand:product[0].brand,
    // image:product[0].image,
    // category:product[0].category,
    // itemQuantity:product[0].itemQuantity
  };
  const userCart = await Cart.findOne({userId});
  if(userCart){ //אם למשתמש יש עגלה קיימת- אז
    await Cart.findOneAndUpdate(userId,{products:resultCart,totalPrice,totalQuantity});
     res.status(200).json({message:'added to the cart schema'})
  }else{//אחרת, ניצור אחת חדשה
   const saveCart = new Cart({
    userId,
    products:resultCart,
    totalPrice,
    totalQuantity,
   });
   await saveCart.save();
   res.status(200).json({message:'creatednew cart,  and added to the cart schema'})
  }
 
} catch (error) {
  console.log('errsds',error.message);
  res.status(500).json(error.message)
}
};



export const resetCart = async (req,res) => {
try {
  const {userId} = req.body;
  await Cart.findOneAndUpdate({userId},
    {
      products:[],
      totalPrice:0,
      totalQuantity:0
    });
  res.status(200).json({message:'cart reseted for thr current user!'})
}catch (error) {
  console.log('error',error.message);
  res.status(500).json(error.message);
}};



export const incrementCart = async (req,res) =>{
  try {
    const {userId, itemId} = req.body;
    const userCart = await Cart.findOne({userId});
    if(userCart){
      const itemIndex = userCart.products.findIndex((item)=>item._id === itemId);
      if(userCart[itemIndex].quantity - userCart[itemIndex].itemQuantity >0){}
     }else{
      res.status(409).json({message:'some error in the increment route'})
    }
  } catch (error) {
    console.log('error',error.message);
    res.status(500).json(error.message);
  }
};



// if(itemIndex>=0){ //if the item exist, so:
//   const increment = userCart.products[itemIndex].itemQuantity ++;
//   await Cart.findOneAndUpdate({userId},
//     {
//      $set:{"products.itemQuantity.$":390} 
//    })
//  }else{//if the item dont exist in the array, so:}