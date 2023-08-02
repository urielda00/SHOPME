import { Box, Button } from "@mui/material";
import {Rating} from "@mui/material";
import {  useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { Link } from "react-router-dom";



 const SingleItemContainer = ({imgSrc ,data, handleState }:any) => {
  const dispatch= useDispatch();
  return (
    <Box sx={{display:'flex',height:'100vh',width:'100%'}}>  
      {/* image left side: */}
      <Box sx={{width:'610px',height:'100vh',padding:'20px',display:'flex', alignItems:'start',justifyContent:'center'}}>
      
        <Box sx={{width:'610px',height:'600px',position:'sticky',top:'100px',display:'flex',justifyContent:'space-around', alignItems:'center'}}>

          <Box sx={{width:'50px',height:'450px',
            display:'flex',flexDirection:'column',marginRight:'-20px'}}>
           {
             data.productImages.slice(1).map((img:string,index:number)=>{
               return(
                <Box sx={{":hover":{opacity:'0.7'}}} key={index}>
                 <img alt='' src={`https://deployment-shopme.onrender.com/product/readProducts/${img}`} 
                style={{width:'50px',height:'70px',objectFit:'cover',borderRadius:'15px',marginBottom:'15px',border:'0.5px solid grey'}}
                 onMouseEnter={()=>{handleState(img)}}
                 />
                 </Box>
               )
             })
           }
        </Box>
        <Box>
         <img alt="" src={imgSrc ?`https://deployment-shopme.onrender.com/product/readProducts/${imgSrc}` 
                          :`https://deployment-shopme.onrender.com/product/readProducts/${data?.productImages[1]}`} 
         style={{width:'400px',height:'540px', objectFit:'contain',borderRadius:'10px'}}/>
         </Box>
        </Box>
      </Box>


      {/* info-right side */}
      <Box sx={{width:'910px',height:'100vh',padding:'20px'}}>
       <Box sx={{height:'600px',width:'800px'}}>
        <h2>{data.longDescription}</h2>
        <h4 style={{color:'grey',fontWeight:'lighter',marginTop:'20px'}}>category: {data.category}</h4>
          <div style={{marginTop:'10px'}}>4.5<Rating value={4.5} precision={0.5} readOnly  size="small"/></div>
          <div style={{borderBottom:'0.5px solid grey'}}></div>
          <div> some delivery section here.</div>
          <h4> some about the item section here.</h4>
          <h5> what in the box section here. (need to add this 3 lines to the DB)</h5>
          <Button variant='contained' sx={{backgroundColor:'#F24C3D', marginRight:'10px'}}
          onClick={()=>{dispatch(addToCart(data))}}>
            Add to cart
            </Button>
          <Link to='/cart'><Button variant='contained' sx={{backgroundColor:'#F2BE22'}}>See Cart</Button></Link>
       </Box>
      </Box>
     </Box>
  )
}
export default SingleItemContainer;