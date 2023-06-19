import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem, deleteAllCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, IconButton, ListItemText ,TextField} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// const userName= window.sessionStorage.getItem('userNameHere');

const CartLScreen = () => {
  const {cart, totalQuantity,totalPrice, warningMessage}= useSelector((state:any)=>state.allCart)
  const dispatch= useDispatch();
  return (
       <Box sx={container} >
         <Box  sx={childContainer1}>
           <div>
             <div style={{display:'flex', alignItems:'end'}}>
              <h1 style={{color:'black',fontFamily:'"Tilt Prism", cursive'}}>SHOPPING CART</h1>
              <p>
                <Button onClick={()=>{dispatch(deleteAllCart())}} style={{color:'grey'}}size='small'>
                  Delete all
                  <DeleteOutlineOutlinedIcon style={{color:'#4E3636',marginTop:'-5px'}}/>
                </Button>
              </p>
            </div>
          {
           cart.length === 0 ?
            <div>
             <div style={{marginTop:'40px',fontSize:'20px',color:'grey'}}>
               The cart is empty
             </div>
             <Link to='/productsList' style={{color:'black'}}>
               <IconButton style={{marginTop:'25px',color:'black'}} size='small'>
                  <KeyboardReturnIcon/>
                  Back to shop
                </IconButton>
             </Link>
            </div>:
            <Link to='/productsList' style={{color:'black'}}>
               <IconButton style={{marginTop:'25px',color:'black'}} size='small'>
                 <KeyboardReturnIcon/>
                  Back to shop
                 </IconButton>
            </Link>
          }  
           <ul>
             <div style={{width:'145%',marginTop:'10px'}}>
          {
            cart?.map((product:any)=>{
              return (
                <li key={product._id} style={liStyle} >
                   <div style={{display:'flex', alignItems:'center',justifyContent:'space-around',marginTop:'15px',width:'90%'}}>
                    <div style={{display:'flex',alignItems:'center',width:'40%'}}>
                      <div>
                         <img  
                          style={{objectFit: 'cover',borderRadius:'15px'}}
                          src={`http://localhost:5000/product/readProducts/${product.image}`}
                          width='90px' height='90px' alt=''/>
                       </div>
                       <div>
                         <ListItemText style={{marginLeft:'30px'}} primary={product.productName} />
                       </div>
                   </div>
                   <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',width:'60%'}}>
                       <div style={{marginLeft:'-10px'}}>
                         <Button onClick={()=>{dispatch(decrementQuantity(product))}}>
                           <RemoveIcon/>
                         </Button>
                         <span>{product.itemQuantity}</span>
                         <Button onClick={()=>{dispatch(incrementQuantity(product))}}>
                           <AddIcon/>
                         </Button>
                       </div>
                       <div style={{marginLeft:'-10px'}} >
                          {product.price}$
                       </div>
                       <div onClick={()=>{ dispatch(removeItem(product))}}>
                         <Button style={{color:'black'}}>
                           <CloseIcon style={{marginLeft:'-30px'}}/>
                         </Button>
                    </div>
                  </div>
                 </div>
                </li>
              )})
          }             
            </div>
           </ul>
         </div>
        </Box>

        <Box sx={{textAlign:'left',width:'25%'}}>
          {
            warningMessage && 
            <div style={warningMessageStyle}>
             {warningMessage}
            </div>
          }
         <div style={{display:'flex', alignItems:'end', justifyContent:'space-between'}}>
             <h1 style={{marginTop:'15px',color:'black',marginLeft:'-60px',fontFamily:'"Tilt Prism", cursive'}}>
              Summary
             </h1>
             <p style={{color:'grey'}}>Total Items: {totalQuantity}</p>
         </div>  
           <div style={{marginLeft:'-50px',marginTop:'30px',marginBottom:'40px'}}>
             <div>
               <h5>
                COUPON CODE:
               </h5>
             </div>
           <TextField  
             InputLabelProps={{ style: { color: 'black' ,opacity:'0.8'}}}
             style={{width:'96%',marginTop:'5px', backgroundColor:'#EDC6B1',color:'black'}}
             label="Enter Your Code" variant="filled">
           </TextField>
           <div style={{marginTop:'70px',display:'flex',alignItems:'end',justifyContent:'space-between'}}>
             <h3>TOTAL PRICE</h3>
             <h3 style={{marginRight:'20px'}}>
               {totalPrice} $
             </h3>
           </div>
          <div>

           <Button style={{textAlign:'center',width:'96%', height:'50px',marginTop:'10px'}}
             sx={{color:'#fff',bgcolor:'#332D2D', ":hover": {color:'black',bgcolor: "#AF5",}}}>
               Checkout
           </Button>
           <Button style={{textAlign:'center',width:'96%', height:'50px',marginTop:'10px'}} 
             sx={{ color:'#fff',bgcolor:'#332D2D',":hover": {color:'black',bgcolor: "#AF5"}}}>   
             Register
           </Button>
           </div>
           </div>
          </Box>
       </Box>
)}
export default CartLScreen;

const container:React.CSSProperties={
  height:'70vh',
  width:'85%',
  backgroundColor:'#fff',
  borderRadius:'20px', 
  display:'flex',
  justifyContent:'space-between',
  padding:'40px',
  minWidth:'900px',
  overflow:'hidden'
};

const childContainer1:React.CSSProperties={
  display:'flex',
 justifyContent:'space-between',
 width:'65%',overflowY:'scroll',
  overflowX:'hidden'
};

const liStyle:React.CSSProperties={
  listStyle:'none',
  display:'flex',
  justifyContent:'space-between'
};
const warningMessageStyle:React.CSSProperties={
  zIndex:2000,
  position:'absolute',
  backgroundColor:'red',         
  top:'190px',
  right:'190px',
  opacity:'0.8',
  color:'black',
  borderRadius:'5px',
  width:'300px',
  textAlign:'center',
  height:'30px'
};