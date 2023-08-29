import { Box, Button, Rating } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";


// Style import:
import {containerLStyle,containerMStyle,containerSStyle} from '../../styles/ProductsListPage/ItemInList';

 const ItemInList = ({item}:any) => {
  const dispatch= useAppDispatch();
  const {user} = useAppSelector((state) => state.user);

  //Only for production:
  const randomSold = (min:number, max:number)=>{
    return Math.floor(min + Math.random()*(max - min + 1));
  };
  const randomShippingPrice = (min:number, max:number)=>{
    return Math.floor(min + Math.random()*(max - min + 1));
  };
  

  return (
    <Box>
     {/* Large screens: */}
     <Box sx={containerLStyle}>
      {/* The left side of the item box: */}
      <div style={{display:'flex'}}>
         <Box sx={{":hover":{opacity:'0.8' }}}>
           <Link to={`/product/${item._id}?category=${item.category}`}>
             <img alt='' src={`http://localhost:5000/product/readProducts/${item.image}`} 
              style={{height:'100%',width:'250px',objectFit:'cover',borderRadius:'10px'}}/>
            </Link>
         </Box>
         <div style={{display:'flex',flexDirection:'column',alignContent:'space-around',marginLeft:'20px'}}>
           <div style={{flexDirection:'column' }}>
             <h3>{item.productName}</h3>
             <p style={{color:'#526D82',marginTop:'10px'}}>{item.shortDescription}</p>
             <p style={{color:'#526D82',marginTop:'5px'}}>category: {item.category}</p>
             <Rating name="read-only" value={4.5} precision={0.5} readOnly sx={{marginTop:'10px'}} />
           </div>
            
           <div>
             <h2 style={{marginTop:'40px',marginLeft:'10px',fontFamily:'sans-serif'}}>{item.price}
             <span style={{fontSize:'15px', marginLeft:'3px'}}>$</span></h2>
             <p style={{color:'#526D82',marginTop:'5px',fontSize:'14px'}}>+{randomShippingPrice(3,14)}$   shipping</p>
             <p style={{color:'#526D82',marginTop:'5px',fontSize:'15px'}}>+{randomSold(100,4210)} sold</p>
           </div>
         </div>     
      </div>
       
      {/* The right side of the item box: */}
       <div style={{display:'flex', flexDirection:'column',width:'20%',
        height:'80%', alignItems:'center',justifyContent:'space-evenly',marginTop:'10px' }}>
         <Button 
          //  onClick={()=>{ 
          //   user ? 
          //   AddToCartAPI('a'): 
          //   dispatch(addToCart(item))}
          // } 
          // הפעולה תתבצע תמיד מול הפעולות של רידוקס, ושם יוחלט אם לקרוא לapi או לא.
          onClick={()=>{dispatch(addToCart(item))}}
           variant='contained' 
           sx={{backgroundColor:'#47A992',width:'180px',marginLeft:'-20px',height:'40px',":hover": {backgroundColor:'#5D9C59'}}}>Add To Cart<AddShoppingCartIcon sx={{marginLeft:'10px'}}/>
         </Button>
          
        <Link to={`/product/${item._id}`}>
          <Button variant='contained'
            sx={{backgroundColor:'#30A2FF',marginLeft:'-20px',width:'180px',height:'40px'}}> 
            More Info 
            <InfoIcon sx={{marginLeft:'10px'}}/>
          </Button>
        </Link>
       </div>  
    </Box>


    {/* Medium screens: */}
    <Box sx={containerMStyle}>
      {/* The left side of the item box: */}
      <div style={{display:'flex',width:'70%'}}>
         <Box sx={{":hover":{opacity:'0.8' }}}>
           <Link to={`/product/${item._id}`}>
             <img alt='' src={`http://localhost:5000/product/readProducts/${item.image}`} 
              style={{height:'90%',width:'200px',objectFit:'cover',borderRadius:'10px'}}/>
            </Link>
         </Box>
         <div style={{display:'flex',flexDirection:'column',alignContent:'space-around',marginLeft:'20px'}}>
           <div style={{flexDirection:'column' }}>
             <h4>{item.productName}</h4>
             <p style={{color:'#526D82',marginTop:'10px',fontSize:'15px'}}>{item.shortDescription}</p>
             <p style={{color:'#526D82',marginTop:'5px',fontSize:'15px'}}>category: {item.category}</p>
             <Rating size="small" name="read-only" value={4.5} precision={0.5} readOnly sx={{marginTop:'10px'}} />
           </div>
            
           <div>
             <h3 style={{marginTop:'15px',marginLeft:'5px',fontFamily:'sans-serif'}}>{item.price}
             <span style={{fontSize:'13px', marginLeft:'3px'}}>$</span></h3>
           </div>
         </div>     
      </div>
       
      {/* The right side of the item box: */}
       <div style={{display:'flex', flexDirection:'column',width:'30%',
        height:'80%', alignItems:'center',justifyContent:'space-evenly',marginTop:'10px',marginRight:'-10px' }}>
         <Button 
           size="small"
           onClick={()=>dispatch(addToCart(item))} 
           variant='contained' 
           sx={{backgroundColor:'#47A992',width:'130px',marginLeft:'-20px',height:'60px',":hover": {backgroundColor:'#5D9C59'}}}>Add To Cart<AddShoppingCartIcon sx={{marginLeft:'10px'}}/>
         </Button>
          
        <Link to={`/product/${item._id}`}>
          <Button variant='contained' size="small"
            sx={{backgroundColor:'#30A2FF',marginLeft:'-20px',width:'130px',height:'60px'}}> 
            More Info 
            <InfoIcon sx={{marginLeft:'10px'}}/>
          </Button>
        </Link>
       </div>
    </Box>

    {/* Small screens: */}
    <Box sx={containerSStyle}>
    <div style={{display:'flex',width:'550px'}}>
         <Box sx={{":hover":{opacity:'0.8' }}}>
           <Link to={`/product/${item._id}`}>
             <img alt='' src={`http://localhost:5000/product/readProducts/${item.image}`} 
              style={{height:'140px',width:'150px',objectFit:'cover',borderRadius:'10px'}}/>
            </Link>
         </Box>
         <div style={{display:'flex',flexDirection:'column',alignContent:'space-around',marginLeft:'20px'}}>
           <div style={{flexDirection:'column' }}>
             <h4>{item.productName}</h4>
             <p style={{color:'#526D82',marginTop:'10px',fontSize:'15px'}}>{item.shortDescription}</p>
             <p style={{color:'#526D82',marginTop:'5px',fontSize:'15px'}}>category: {item.category}</p>
             <Rating size="small" name="read-only" value={4.5} precision={0.5} readOnly sx={{marginTop:'10px'}} />
           </div>
            
           
         </div>     
      </div>
       
      {/* The right side of the item box: */}
      <div style={{display:'flex',flexDirection:'column',width:'150px',height:'80%',position:'relative'}}>
          <div style={{position:'absolute'}}>
             <h3 style={{marginTop:'40px',marginLeft:'25px',fontFamily:'sans-serif'}}>{item.price}
             <span style={{fontSize:'13px', marginLeft:'3px'}}>$</span></h3>  
           </div>
      
       <div style={{display:'flex',width:'105%',flexDirection:'column',
        height:'80%', alignItems:'end',justifyContent:'space-between',position:'absolute',top:'65px'}}>
          
         <Button 
           size="small"
           onClick={()=>dispatch(addToCart(item))} 
           variant='contained' 
           sx={{backgroundColor:'#47A992',width:'60px',marginLeft:'-20px',height:'50px',":hover": {backgroundColor:'#5D9C59'}}}><AddShoppingCartIcon/>
         </Button>
          
        <Link to={`/product/${item._id}`}>
          <Button variant='contained' size="small"
            sx={{backgroundColor:'#30A2FF',marginLeft:'-20px',width:'60px',height:'50px'}}> 
            
            <InfoIcon/>
          </Button>
        </Link>
       </div>
       </div>
    </Box>
    
    </Box>
  )
}
export default ItemInList;

  // useEffect(() => {
  //   axios.post('http://localhost:5000/cart/addToCart',{product: cart,userId,totalPrice,totalQuantity})
  // }, [cart])



// const handleAddToCart  = async(item:any)=>{
  //     const isItem =  dispatch(addToCart(item));
  //   // setTimeout(
  //   //   ()=>{
  //   //    axios.post('http://localhost:5000/cart/addToCart',{product: item})
  //   //   },2000)
  //   //    if(!warningMessage){
  //   //  }else{
  //   //   console.log('the item is out of the stock- the itemInListPage');
  //   //  }
    
  //   // if(userId){
  //   //   // if the item exist on the cart:

  //   //   const finalProduct= {...item,itemQuantity:1}
  //   //   axios.post('http://localhost:5000/cart/addToCart',{product: finalProduct,userId, totalQuantity})
  //   //   .then(res => {
  //   //     dispatch(addToCart(item))
  //   //   })
  //   //   .catch(error=>{
  //   //     console.log('error in add to cart- item in list page',error);
  //   //   })
  //   // }else{
  //   //  dispatch(addToCart(item)) 
  //   // }
    
  //   // להוסיף תנאי- שאם המזהה של המשתנה בסטייט קיים- זה ייצור בקשת אקיוס. אחרת, פשוט יוסיף מקומית
  //   // axios.post()
  // }