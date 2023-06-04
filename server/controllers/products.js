import Product from "../models/Products.js";
import { ProductErrorLogger, ProductInfoLogger } from "../middleware/winston.js";


// need to add some page where the admin can add new products to the website!
//meaning only the admin will have access to the following routes.- check that.

//Create: 
export const createProduct=  async (req, res)=> {
  try {
   
    const filesnames = req.files.map(function(file) {
     return file.filename;// or file.originalname
    });
  const {shortDescription, longDescription, price,quantity, category, productName}= req.body;
  const saveProduct= new Product({
    productImages: filesnames,
    productName,
    shortDescription,
    longDescription,
    price,
    quantity,
    status: 'available',
    category
  });
  await saveProduct.save();

  ProductInfoLogger.log('info','Product created successfully status code: 201');
  res.status(201).json({message:'Product created successfully!'});

  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    res.status(500).json(error.message)
  }
 };


 //Read:
 export const readProducts= async (req,res)=>{
  try {
    const products= await Product.find({status: 'available'}); 
    ProductInfoLogger.log('info','get all the products. status code: 200');
    res.status(200).json(products);
  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    res.status(500).json(error.message)
  }
 };


 //need to make react router:  to send the update form to this path:
 //here we updating only the necessary update ( with patch) of the product info:



 //later- need to specify the req.body- and use express-validator on that.
 //Update:
 export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updates= req.body;
  const options= {new: true};
  try {
  
    const updatedProduct = await Product.findOneAndUpdate(id, updates, options );
    ProductInfoLogger.log('info','product updated. status code: 201');
    res.status(201).json(updatedProduct);
    
  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    res.status(500).json(error.message);
  }
};




//Delete:
export const deleteProduct = async (req, res) => { //only make the status unavailable!
  const id = req.params.id;
  
  try {
    const deletedProduct = await Product.findByIdAndUpdate(id, {status:'unavailable'});
    ProductInfoLogger.log('info','product deleted. status code: 201');
    res.status(201).json({message:'The product has been successfully deleted!'});
  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    res.status(500).json(error.message)
  }
};

