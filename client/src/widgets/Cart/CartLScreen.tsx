import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem, deleteAllCart } from '../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, IconButton, ListItemText ,TextField} from '@mui/material';
import ErrorMessages from './ErrorMessages';
import { useState } from 'react';
import DialogIs from './DialogIs';

// Icons import:
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// Styles import:
import { container,childContainer1,liStyle} from '../../styles/CartPage/CartLScreen';


const CartLScreen = () => {
  const {cart, totalQuantity,totalPrice, warningMessage, userId}= useSelector((state:any)=>state.allCart);
  const {user}= useSelector((state:any)=>state.user);

  const dispatch= useDispatch();  
  const [ dialogOpen ,setDialogOpen] = useState(false);
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
                          src={`https://deployment-shopme.onrender.com/product/readProducts/${product.image}`}
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
                       <div onClick={()=>{dispatch(removeItem(product))}}>
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
            warningMessage && <ErrorMessages/>
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
            <DialogIs open={dialogOpen}/>
            {
              cart.length < 1 ?
              <Button onClick={()=>{
                setDialogOpen(true)
                setTimeout(() => {
                setDialogOpen(false)}, 1000)}}
                  
                   style={{textAlign:'center',width:'96%', height:'50px',marginTop:'10px'}}
                 sx={{color:'#fff',bgcolor:'#332D2D', ":hover": {color:'black',bgcolor: "#AF5",}}}>
                  Checkout
              </Button>:
              <Link to='/checkout'>
                <Button style={{textAlign:'center',width:'96%', height:'50px',marginTop:'10px'}}
                  sx={{color:'#fff',bgcolor:'#332D2D', ":hover": {color:'black',bgcolor: "#AF5",}}}>
                  Checkout
                </Button>
              </Link>
            }
            {
              !user && 
              <Link to='/register'>
              <Button style={{textAlign:'center',width:'96%', height:'50px',marginTop:'10px'}} 
               sx={{ color:'#fff',bgcolor:'#332D2D',":hover": {color:'black',bgcolor: "#AF5"}}}>   
                Register
              </Button>
              </Link>
            }
           
           </div>
           </div>
          </Box>
       </Box>
)}
export default CartLScreen;