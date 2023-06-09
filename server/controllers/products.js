import Product from "../models/Products.js";
import { ProductErrorLogger, ProductInfoLogger } from "../middleware/winston.js";


// need to add some page where the admin can add new products to the website!
//meaning only the admin will have access to the following routes.- check that.

//Create: 
export const createProduct=  async (req, res)=> {
  try {
   
    const filesnames = req.files.map((file) =>{
     return file.filename;// or file.originalname
    });
  const {shortDescription, longDescription, price,quantity, category, productName,company}= req.body;
  const saveProduct= new Product({
    productImages: filesnames,
    image: filesnames[0],
    productName,
    shortDescription,
    longDescription,
    price,
    quantity,
    status: 'available',
    category,
    company
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
    //Page, number items per page, and number of item to skip in mongo:
    const page = Number(req.query.page) || 1 ; 
    const per_page = Number(req.query.per_page);
    const category = req.query.category || false; 
    const year = req.query.year || false; 
    const os = req.query.os || false; 
    const brand = req.query.brand || false; 
    let itemToSkip = 0; 
    let items = []; 
    
    //repeat the Items and push the appropriate items to the result item array:
     if (category && brand && os && year ){
      (await Product.find({$and:[{status: 'available'},{category},{releaseYear:year},{os},{brand}]})
      .skip(itemToSkip).limit(per_page * page))
      .forEach((item)=>{items.push(item)})
      itemToSkip = per_page * page;
     }else if(category && brand && os ){

      (await Product.find({$and:[{status: 'available'},{category},{os},{brand}]})
      .skip(itemToSkip).limit(per_page * page))
      .forEach((item)=>{items.push(item)})
      itemToSkip = per_page * page;
     }else if(category && brand){

      (await Product.find({$and:[{status: 'available'},{category},{brand}]})
      .skip(itemToSkip).limit(per_page * page))
      .forEach((item)=>{items.push(item)})
      itemToSkip = per_page * page;
     }else if(category){
      (await Product.find({$and:[{status: 'available'},{category}]})
      .skip(itemToSkip).limit(per_page * page))
      .forEach((item)=>{items.push(item)})
      itemToSkip = per_page * page;
    }else{
      (await Product.find({status: 'available'}).skip(itemToSkip).limit(per_page * page))
      .forEach((item)=>{items.push(item)})
      itemToSkip = per_page * page;
    }

    ProductInfoLogger.log('info','get the products list. status code: 200');
    res.status(200).json(items)
 } catch (error) {
  ProductErrorLogger.log('error',`${error.message} status code: 500`);
  res.status(500).json(error.message)
 }};

 





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


//Search products:
export const searchProduct= async(req,res)=>{
  //later- make the search index only on the spceific fields inside the product  schema.
  try {
    const { key } = req.query
		 const pipeline= [{
      "$search":{
      "index":"some1",
      "text":{
        "query":key,
        "path":{
          'wildcard':'*'
        },
        "fuzzy":{}
       }
      }
    }] 
		const response = await Product.aggregate(pipeline);
    
    return res.json(response)
  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    res.status(500).json(error.message)
  }
}