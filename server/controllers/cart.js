import Cart from "../models/Cart.js";
// להוסיף לוגר אחכ


export const addToCart = async(req,res) => {
try {
 console.log('test');
 
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

