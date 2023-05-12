import Product from "../models/Products.js";



// need to add some page where the admin can add new products to the website!
//meaning only the admin will have access to the following routes.

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
    res.status(500).json(error)
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


 //need to make react router:  to send the update form to this path:
 //here we updating only the necessary update ( with patch) of the product info:


 //Update:
 export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updates= req.body;
  const options= {new: true};
  try {
  
    const updatedProduct = await Product.findOneAndUpdate(id, updates, options );
    res.json(updatedProduct);
    
  } catch (error) {
    res.status(500).json(error)
  }
};




//Delete:

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await Product.findOneAndDelete(id);
    res.send('The product has been successfully deleted!');
  } catch (error) {
    res.status(500).json(error)
  }
};

