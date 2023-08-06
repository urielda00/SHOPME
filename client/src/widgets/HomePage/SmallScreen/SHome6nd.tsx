import { Box } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/HomePage/6nd/buds2.jpg';
import img2 from '../../../assets/HomePage/6nd/flip4.jpg';
import img3 from '../../../assets/HomePage/6nd/watch5.jpg';
import img4 from '../../../assets/HomePage/6nd/zFold.jpg';

const SHome6nd = () => {
  return (
    <Box sx={{width:'100%',height:'200%',textAlign:'center',backgroundColor:'white',display:'flex',justifyContent:'center',flexDirection:'column',padding:'10px'}}>
     <h1 style={{marginBottom:'30px', fontFamily:'Georgia, sans-serif	', borderBottom:'1px solid black'}}>Offers</h1>
     <Box 
     sx={{width:'100%',height:'10vh',marginBottom:'-40px', display:'flex', justifyContent:'center'}}>
      <Link to='//productsList?toCategory=phone' style={linkStyle}><h3 >Mobile</h3></Link>
      <Link to='/productsList?toCategory=watches' style={linkStyle}><h3 >Watches</h3></Link>
      <Link to='/productsList?toCategory=headphons' style={linkStyle}><h3 >HeadPhones</h3></Link>
      <Link to='/productsList?toCategory' style={linkStyle}><h3 >See All</h3></Link>
      </Box>    

      <Box>
        <Link to='/productsList?toCategory=headphons'>
           <img alt='' style={{width:'100%',height:'100%',borderRadius:'30px',objectFit:'cover'}} src={img1} /> 
        </Link>
      </Box>

      <Box>
         <Link to='/productsList?toCategory=phone&brand=Samsung'>
           <img alt='' style={{width:'100%',height:'100%',borderRadius:'30px',objectFit:'cover'}} src={img2}/> 
         </Link>
      </Box>
      
      <Box>
         <Link to='/productsList?toCategory=watches'>
           <img alt='' style={{width:'100%',height:'100%',borderRadius:'30px',objectFit:'cover'}} src={img3}/> 
         </Link>
      </Box>

       <Box>
         <Link to='/productsList?toCategory=phone&brand=Samsung'>
           <img alt='' style={{width:'100%',height:'100%',borderRadius:'30px',objectFit:'cover'}} src={img4}/>
         </Link>
       </Box> 
    </Box>
  )
};

export default SHome6nd;

const linkStyle:React.CSSProperties = {
  width:'150px',
  textAlign:'center',
  textDecoration:'none',
  color:'black'
};


