import { Box } from '@mui/material'
import img1 from '../../../assets/HomePage/6nd/buds2.jpg';
import img2 from '../../../assets/HomePage/6nd/flip4.jpg';
import img3 from '../../../assets/HomePage/6nd/watch5.jpg';
import img4 from '../../../assets/HomePage/6nd/zFold.jpg';
import img5 from '../../../assets/HomePage/6nd/bigPhoto1.jpg';

import React from 'react';
import { Link } from 'react-router-dom';




const Home6nd = () => {
  
  return (
    <Box sx={{width:'100%',height:'100vh',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',boxShadow: '-1px -4px 43px -12px rgba(0,0,0,1)'}}>
     <h1 style={{marginBottom:'10px', fontFamily:'Georgia, sans-serif	', borderBottom:'1px solid black'}}>Offers</h1>
     <Box 
     sx={{width:'100%',height:'10vh',marginBottom:'-50px', display:'flex', justifyContent:'center'}}>
      <Link to='/mobiles' style={linkStyle}><h3 >Mobile</h3></Link>
      <Link to='/watches' style={linkStyle}><h3 >Watches</h3></Link>
      <Link to='/headPhones' style={linkStyle}><h3 >HeadPhones</h3></Link>
      <Link to='/productsList' style={linkStyle}><h3 >See All</h3></Link>
      </Box>
      
     <Box sx={{width:'90%', height:'75vh',marginBottom:'-20px', padding:'20px', backgroundColor:'white', display:'flex', justifyContent:'space-between'}}>

       {/* the left- four boxes */}
     <Box sx={{ width:'48%', height:'75vh', display: 'flex', flexDirection:'column'}}>
       <Box sx={{ width:'100%',height:'40vh',display:'flex',justifyContent:'space-between',padding:'10px'}}>
        
         <Box style={smallImagesStyle}
             sx={{ ":hover":{ transform: 'scale(1.1)'}}}>
              <Link to='/some'>
              <img alt='' style={{width:'100%',height:'95%',borderRadius:'30px',objectFit:'cover'}} src={img1} /> 
              </Link>
             </Box>
       
         <Box style={smallImagesStyle}
             sx={{ ":hover":{ transform: 'scale(1.1)'}}}>
              <Link to='/some'>
              <img alt='' style={{width:'100%',height:'95%',borderRadius:'30px',objectFit:'cover'}} src={img2}/> 
              </Link>
             </Box>
       </Box>

       <Box sx={{ width:'100%',height:'40vh',display:'flex',padding:'10px',justifyContent:'space-between'}}>
        <Box style={smallImagesStyle}
             sx={{ ":hover":{ transform: 'scale(1.1)'}}}>
              <Link to='/some'>
              <img alt='' style={{width:'100%',height:'95%',borderRadius:'30px',objectFit:'cover'}} src={img3}/> 
              </Link>
              </Box> 
         <Box style={smallImagesStyle}
             sx={{":hover":{ transform: 'scale(1.1)'}}}>
              <Link to='/some'>
              <img alt='' style={{width:'100%',height:'95%',borderRadius:'30px',objectFit:'cover'}} src={img4}/>
               </Link>
             </Box>
       </Box>
     </Box>
      

    
     {/* the right big box */}
     <Box style={bigImageStyle}
             sx={{ ":hover":{ transform: 'scale(1.07)'}}}>
              <Link to='/some'>
                <img alt='' style={{width:'100%',height:'95%',borderRadius:'30px',objectFit:'cover'}} src={img5}/>
             </Link>
     </Box>


     </Box>
    </Box>
  )
}

export default Home6nd;


const smallImagesStyle:React.CSSProperties = {
  width:'46%',
  height:'35vh',
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  marginLeft:'10px' ,
  transition: 'transform 0.4s ease',
};

const bigImageStyle:React.CSSProperties = {
  width:'50%',
  height:'75vh',
  borderRadius:'30px',
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  marginLeft:'10px' ,
  transition: 'transform 0.4s ease',
};
const linkStyle:React.CSSProperties = {
  width:'150px',
  textAlign:'center',
  textDecoration:'none',
  color:'black'
};


