import Product from "../models/Products.js";



// need to add some page where the admin can add new products to the website!
export const createProduct= async(req,res)=>{
try{
const { file, price, shortDescription, longDescription, quantity}= req.body;
  const newProduct = new Product({
    file, //later need to check about the image path, and add the added item to the map in the frontend
    price,
    shortDescription,
    longDescription,
    quantity
  });
  await newProduct.save();
  // res.json(newProduct); 
} catch (error) {
  res.status(500).json(error);
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