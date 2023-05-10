import Product from "../models/Products.js";



// need to add some page where the admin can add new products to the website!
export const createProduct=  async (req, res)=> {
  try {
  const imagePath= req.file.filename;
  const saveProduct= new Product({
    imageUrl: imagePath
  })
  await saveProduct.save();
 
  } catch (error) {
    console.log(error);
  }
 
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
 }





//test start




//test end




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