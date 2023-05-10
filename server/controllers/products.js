import Product from "../models/Products.js";



// need to add some page where the admin can add new products to the website!


//Create:
export const createProduct=  async (req, res)=> {
  try {
  const imagePath= req.file.filename;
  const {shortDescription, longDescription, price,quantity}= req.body;
  const saveProduct= new Product({
    productImage: imagePath,
    shortDescription,
    longDescription,
    price,
    quantity
  })
  await saveProduct.save();
  res.status(200).send();
  } catch (error) {
    console.log(error);
  }
  // req.file is the `productImage` file
 }


 //Read:
 export const readProducts= async (req,res)=>{
  try {
    const products= await Product.find(); 
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
 }







/*
//later need to filter the next code for adding those funcunalities.
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate({ id }, req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    const deleteProduct = await Product.findOneAndDelete(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});


*/