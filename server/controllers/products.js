import Product from "../models/Products.js";
import { ProductErrorLogger, ProductInfoLogger } from "../middleware/winston.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "../");


//Create: 
export const createProduct=  async (req, res)=> {
  try {
    const imagesNames=[];  
    const {productName,shortDescription,longDescription,quantity,
      releaseYear,brand,category,company,os,price} = req.body;

  // Handle the images upload:
    const file = req.files.screenshot;
    const file2 = req.files.screenshot2;
    const file3 = req.files.screenshot3;
    const file4 = req.files.screenshot4;
    
  
    const filename = Date.now() + "_" + file.name;
    const filename2 = Date.now() + "_" + file2.name;
    const filename3 = Date.now() + "_" + file3.name;
    const filename4 = Date.now() + "_" + file4.name;


    imagesNames.push(filename,filename2,filename3,filename4)


    let uploadPath = __dirname + "/uploads/" + filename;
    let uploadPath2 = __dirname + "/uploads/" + filename2;
    let uploadPath3 = __dirname + "/uploads/" + filename3;
    let uploadPath4 = __dirname + "/uploads/" + filename4;

    file.mv(uploadPath, (err) => {if (err) {return res.send(err)}});
    file2.mv(uploadPath2, (err) => {if (err) {return res.send(err)}});
    file3.mv(uploadPath3, (err) => {if (err) {return res.send(err)}});
    file4.mv(uploadPath4, (err) => {if (err) {return res.send(err)}});
      
  const saveProduct= new Product({
    productImages: imagesNames,
    image: imagesNames[0],
    productName,
    shortDescription,
    longDescription,
    price,
    quantity,
    status: 'available',
    category,
    company,
    releaseYear,
    os,
    brand
  });
  await saveProduct.save();
  ProductInfoLogger.log('info','Product created successfully status code: 201');
  res.status(201).json({message:'Product created successfully!'});

  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    console.log('error',error);
    res.status(500).json(error.message)
  }
 };



 //Read many:
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
    res.status(302 ).json(items)
 } catch (error) {
  ProductErrorLogger.log('error',`${error.message} status code: 500`);
  res.status(500).json(error.message)
 }};



 //Read single 
 export const readSingleProduct = async(req,res) => {
  const productId = req.params.productId;
  
  try {
  const item = await Product.findById(productId);
  ProductInfoLogger.log('info','get the single product. status code: 200');
  res.status(200).json(item);
  } catch (error) {
   ProductErrorLogger.log('error',`${error.message} status code: 500`);
   res.status(500).json(error.message)
  }};


  // Read Relate items:
  export const readRelatedItemsByCategory = async(req,res)=> {
  const category = req.query.category || false; 
  try {
    if(category){
    const items = await Product.find({$and:[{status: 'available'},{category}]}).limit(8);
    res.status(200).json(items)
    }else{
      res.status(404).json({message:'Not found'})
    } 
  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    res.status(500).json(error.message)
  }
  }




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
  const id = req.body.id;
  console.log('id',id);
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
		const response = await Product.aggregate(pipeline).limit(8);
    
    return res.json(response)
  } catch (error) {
    ProductErrorLogger.log('error',`${error.message} status code: 500`);
    res.status(500).json(error.message)
  }
};

//Update item-  middle-form test (if exist):
export const checkIfExist = async (req,res) => {
  try {
    const {data} = req.params;
    const checkItem = await Product.findOne({_id:data})

    if(!checkItem){
      ProductInfoLogger.log('info','product exist. status code: 200');
      res.status(200).send(['1'])
    }else{{
      ProductInfoLogger.log('info','product dont exist. status code: 200');
      res.send([]);
    }}
  } catch (error) {
    ProductInfoLogger.log('error', `${error.message}. status code: 500`);
    res.status(500).json(error.message)
  }
  }

    // const filesnames = req.files.map((file) =>{
    //  return file.filename;// or file.originalname
    // });