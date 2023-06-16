import React, {ReactNode, useEffect,useState} from 'react'
import axios from 'axios';
import { Box, Grid,Button, IconButton } from '@mui/material';
import photo from '../../assets/pocoF5.png';
import logo from '../../assets/logo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import logo2 from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';



const Test = () => {
  const cart= useSelector((state:any)=>state.allCart.cart);
  const dispatch= useDispatch();
  
  const [products,setProducts]= useState([]);
  const [cartItems,setCartItems]= useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/product/readProducts')
   .then(res=>{
    setProducts(res.data);
   }).catch(err=>{console.log(err);})
  },[])
  

  return (
    <div style={{height: '100vh',width:'100%'}}>

     
      
      <ul>
        <div style={{display:'grid',justifyItems:'center',
        gridTemplateColumns:'repeat(auto-fit,minmax(23rem,1fr))',
        flex:'1',width:'100%',backgroundColor:'#F5EFE7', flexWrap:'wrap'}}>
        {products?.map((product:any)=>{
          return (
            
            <li key={product._id} style={{listStyle:'none'}}>
             
             <div style={{width:'350px',height:'650px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'10px',marginBottom:'10px',boxShadow:' -2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>
            
            <div style={{position:'relative',marginBottom:'20px'}}>
             <Link to={`http://localhost:5000/product/${product._id}`}> <div>
            <img src={`http://localhost:5000/product/readProducts/${product.image}`} style={{width:'90%',objectFit:'cover',height:'300px', marginTop:'23px',borderRadius:'10px'}}/>
            <img src={logo2} style={{width:'12%', marginTop:'20px'}}/>
            </div>
            </Link>
            <h1 style={{fontFamily:'"Crimson Text", serif', marginTop:'10px'}}>{product.productName}</h1>
            <h3 style={{marginTop:'5px'}}>{product.shortDescription}</h3>
            <h2 style={{marginTop:'30px'}}>{product.price}$</h2>
            </div>
          
            
            
            
            
            <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center', height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
        {/* <div style={{display:'none'}} id='productIdDiv'></div>    */}
        <Button variant="outlined"  sx={{color:'black', backgroundColor:'#4D96FF'}} onClick={()=>{
          dispatch(addToCart(product))
          console.log(cart);
        }}>
         Add To Cart
        </Button>
        <Link to='/cart'>aaaaaaaaa</Link>
    </div>

    <div style={{position:'absolute',right:'30px', top:'20px'}}>
      <Button variant="outlined" sx={{color:'black', backgroundColor:'#6BCB77'}}>Buy Now</Button>
    </div>

  </div>


</div>

            </li>
             
          )
        })}
        </div>
      </ul>
     </div>
    

  )
}

export default Test;
const containerStyle: React.CSSProperties={
  // marginBottom: '380px',
  // overflow: 'hidden',
  width: '100%',
  height: '100vh',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent:'space-between',
  float: 'none',
}

const listContainerStyle:React.CSSProperties={
  backgroundColor:'red',
  marginTop:'10px'
}
