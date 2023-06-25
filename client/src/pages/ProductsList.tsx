import  {useEffect,useState} from 'react'
import axios from 'axios';
import {Button} from '@mui/material';
import logo2 from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import readProducts from '../services/ProuductList/readProducts';

const userName= window.sessionStorage.getItem('userNameHere');

const ProductsList = () => {
     const cart= useSelector((state:any)=>state.allCart.cart)
     const totalPrice= useSelector((state:any)=>state.allCart.totalPrice);
  // const handlelogout= ()=>{
  //          axios.post('http://localhost:5000/auth/signout',
  //             {
  //               cart: cart,
  //               userName: userName,
  //               totalPrice : totalPrice
  //             }).then((res)=>{console.log(res);}).catch(error=>console.log(error))
  //             window.sessionStorage.clear();
  // };
  const dispatch= useDispatch();

  
  const [products,setProducts]= useState([]);
  useEffect(()=>{
  readProducts(setProducts) 
  //  const some:any = readProducts(setProducts); 
  // setProducts(some);
  //   axios.get('http://localhost:5000/product/readProducts')
  //  .then(res=>{
  //   setProducts(res.data);
  //  }).catch(err=>{console.log(err);})
  },[])

  return (
    <div style={{height: '100vh',width:'100%'}}>
      
     
      
      <ul>
        <div style={{display:'grid',justifyItems:'center',gridGap:'5px',
        gridTemplateColumns:'repeat(auto-fit,minmax(23rem,1fr))',
        flex:'1',width:'100%',backgroundColor:'#F5EFE7', flexWrap:'wrap'}}>
        {products?.map((product:any)=>{
          return (
            <li key={product._id} style={{listStyle:'none'}} >
             
             <div style={{width:'350px',height:'630px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'10px',marginBottom:'5px',boxShadow:' -2px 2px 2px 1px rgba(0, 0, 0, 0.2)',paddingRight:'10px'}}>
            
            <div style={{position:'relative',marginBottom:'20px'}}>
             <Link to={`http://localhost:5000/product/${product._id}`}><div>
            <img className='hover' src={`http://localhost:5000/product/readProducts/${product.image}`} style={{width:'90%',objectFit:'cover',height:'300px', marginTop:'15px',borderRadius:'10px'}} alt=''/>
            <img src={logo2} style={{width:'12%', marginTop:'20px'}} alt=''/>
            </div>
            </Link>
            <h1 style={{marginTop:'10px'}}>{product.productName}</h1>
            <h3 style={{marginTop:'5px'}}>{product.shortDescription}</h3>
            <h2 style={{marginTop:'30px'}}>{product.price}$</h2>
            </div>
          
            
            
            
            
            <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center', height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
        {/* <div style={{display:'none'}} id='productIdDiv'></div>    */}
        <Button variant="outlined"  sx={{color:'black', backgroundColor:'#4D96FF'}} onClick={()=>{
          dispatch(addToCart(product));

        }}>
         Add To Cart
        </Button>
        {/* <Link to='/cart'>aaaaaaaaa</Link> */}
    </div>

    <div style={{position:'absolute',right:'30px', top:'20px'}}>
      <Link to='/cart'>
        <Button variant="outlined" sx={{color:'black', backgroundColor:'#6BCB77'}}
         onClick={()=>{dispatch(addToCart(product))}}>
        Buy Now
         </Button>
        </Link>
    </div>

  </div>


</div>

            </li>
             
          )
        })}
        </div>
      </ul>
      {/* <button onClick={handlelogout}>signout</button> */}
     </div>
    

  )
}

export default ProductsList;
// const containerStyle: React.CSSProperties={
//   // marginBottom: '380px',
//   // overflow: 'hidden',
//   width: '100%',
//   height: '100vh',
//   // display: 'flex',
//   // alignItems: 'center',
//   // justifyContent:'space-between',
//   float: 'none',
// }

// const listContainerStyle:React.CSSProperties={
//   backgroundColor:'red',
//   marginTop:'10px'
// }
