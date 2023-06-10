import * as React from 'react';
import back1 from '../assets/HomePage/back1.jpg';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import ProductsList from '../widgets/HomePage/ProductsList';

const HomePage = () => {
  return (
    <>
    <Box sx={{display:{xs:'none',sm:'none', md: 'block'}}}>
    <Box style={containerStyle} >
     <Button variant='contained'  style={{position:'relative',left:'70%', top:'10%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
    <ProductsList/>
    </Box>

    <Box  sx={{display:{xs:'none',sm:'block', md: 'none'}}}>
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'65%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
    </Box>

    <Box  sx={{display:{xs:'block',sm:'none', md: 'none'}}}>
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'40%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
    </Box>
    </>
  )
}

export default HomePage;

const containerStyle: React.CSSProperties={
  backgroundImage: `url(${back1})`,
  // marginBottom: '-80px',
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  overflow: 'hidden',
  width: '100%',
  height: '83vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  float: 'none',
  
}
