import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, IconButton, ListItemText ,TextField} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';


const Cart = () => {
  const {cart, totalQuantity,totalPrice, warningMessage}= useSelector((state:any)=>state.allCart)
  const dispatch= useDispatch();
  
  return (
     <Box id='ScrollCartStyle' sx={{display:{xs:'none',sm:'none', md: 'flex'},
      height:'83.4vh', backgroundColor:'#d2c9ff',alignItems:'center',
      justifyContent:'center',flex:'1'}}>

       <Box sx={{height:'70vh',width:'85%', backgroundColor:'#fff',borderRadius:'20px', display:'flex',justifyContent:'space-between',padding:'40px'}} >

        <Box  sx={{display:'flex', justifyContent:'space-between',width:'65%',overflowY:'scroll'}}>
          <div><h1 style={{color:'black',fontFamily:'"Tilt Prism", cursive'}}>SHOPPING CART</h1>
          {
           cart.length === 0 ?
           <div>
             <div style={{marginTop:'40px',fontSize:'20px',color:'grey'}}>
               The cart is empty
             </div>
             <Link to='/' style={{color:'black'}}>
               <IconButton style={{marginTop:'25px',color:'black'}} size='small'>
                  <KeyboardReturnIcon/>
                  Back to shop
                </IconButton>
             </Link>
           </div>:
           <Link to='/' style={{color:'black'}}>
               <IconButton style={{marginTop:'25px',color:'black'}} size='small'>
                  <KeyboardReturnIcon/>
                  Back to shop
                </IconButton>
             </Link>
          }
          
          <ul>
           <div style={{width:'150%',marginTop:'10px'}}>
          {
            cart?.map((product:any)=>{
              return (
                <li key={product._id} style={{listStyle:'none'}}>
                  <div style={{display:'flex', alignItems:'center',marginTop:'15px'}}>
                    <div>
                      <img  
                       style={{objectFit: 'cover',borderRadius:'15px'}}
                       src={`http://localhost:5000/product/readProducts/${product.image}`}
                       width='90px' height='90px'/>
                    </div>
                    <div style={{width:'200px'}}>
                     <ListItemText style={{marginLeft:'30px'}} primary={product.productName} 
                     secondary={`${product.shortDescription}`}/>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                      <Button onClick={()=>{dispatch(decrementQuantity(product))}}>
                        <RemoveIcon/>
                      </Button>
                      <span>{product.itemQuantity}</span>
                      <Button onClick={()=>{dispatch(incrementQuantity(product))}}>
                        <AddIcon/>
                      </Button>
                   </div>
                   <div style={{width:'60px',textAlign:'center',marginLeft:'40px'}}>
                     {product.price}$
                   </div>
                   <div style={{width:'60px',marginRight:'-190px',marginLeft:'100px'}} 
                    onClick={()=>{ dispatch(removeItem(product))}}>
                      <Button style={{color:'black'}}>
                        <CloseIcon/>
                      </Button>
                   </div>
                  </div>
                </li>
              )})
          }             
           </div>
          </ul>
         </div>
          <p style={{marginTop:'25px',color:'grey',marginRight:'10px'}}>Total Items: {totalQuantity}</p>
        </Box>

        <Box sx={{textAlign:'left',width:'25%'}}>
        {
          warningMessage && 
          <div style={{zIndex:2000, position:'absolute', backgroundColor:'red',
              top:'190px',right:'190px', opacity:'0.8', color:'black', borderRadius:'5px',
              width:'300px', textAlign:'center', height:'30px'}}>
            {warningMessage}
          </div>
       }
          <h1 style={{marginTop:'15px',color:'black',marginLeft:'-70px',
           fontFamily:'"Tilt Prism", cursive'}}>
            Summary
          </h1>
          
          <div style={{marginLeft:'-50px',marginTop:'125px'}}>
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
          <div style={{marginTop:'40px',display:'flex',alignItems:'end',justifyContent:'space-between'}}>
            <h3>TOTAL PRICE</h3>
            <h5 style={{marginRight:'20px'}}>
              {totalPrice}$
            </h5>
          </div>
          <div>
          {
           window.sessionStorage.getItem('isLoggedIn')==='true'?
           <Button>Checkout</Button>:
           <Button style={{textAlign:'center',width:'96%',color:'#fff',
             backgroundColor:'#332D2D', height:'50px',marginTop:'10px'}}>        
             Register
           </Button>
          }
          </div>
          </div>
        </Box>
       </Box>
       
     </Box>
  )
};

export default Cart;