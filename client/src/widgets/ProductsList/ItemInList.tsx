import { Box, Button, Rating } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { addToCart } from "../../features/cartSlice";



 const ItemInList = ({item}:any) => {
  const dispatch= useDispatch();

  const randomSold = (min:number, max:number)=>{
    return Math.floor(min + Math.random()*(max - min + 1));
  };
  const randomShippingPrice = (min:number, max:number)=>{
    return Math.floor(min + Math.random()*(max - min + 1));
  };

  return (
    <div style={{height:'280px',width:'100%',backgroundColor:'#fff',marginBottom:'1px',display:'flex',justifyContent:'space-between',padding:'20px',borderBottom:'1px solid grey'}}>


      <div style={{display:'flex'}}>
         <Box sx={{":hover":{opacity:'0.8' }}}>
          <Link to={`/product/:${item._id}`}>
           <img src={`http://localhost:5000/product/readProducts/${item.image}`} 
           style={{height:'100%',width:'250px',objectFit:'cover',borderRadius:'10px'}} /></Link>
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
           <p style={{color:'#526D82',marginTop:'5px',fontSize:'14px'}}>+{randomShippingPrice(3,14)}$ shipping</p>
           <p style={{color:'#526D82',marginTop:'5px',fontSize:'15px'}}>+{randomSold(100,4210)} sold</p>
         </div>

         </div>
         
         
         
      </div>
      
       <div style={{display:'flex', flexDirection:'column',width:'20%',height:'80%', alignItems:'center',justifyContent:'space-evenly' }}>
        <Button onClick={()=>{dispatch(addToCart(item))}} variant='contained' sx={{backgroundColor:'#47A992',width:'180px',height:'40px'}}>Add To Cart<AddShoppingCartIcon sx={{marginLeft:'10px'}}/>
         </Button>
          
          
        <Link to={`/product/:${item._id}`}>
        <Button variant='contained' sx={{backgroundColor:'#30A2FF',width:'180px',height:'40px'}}> More Info <InfoIcon sx={{marginLeft:'10px'}}/></Button></Link>
       </div>
       
    </div>
  )
}
export default ItemInList;
