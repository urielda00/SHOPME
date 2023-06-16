import * as React from 'react';
import back1 from '../assets/HomePage/back1.jpg';
import { Link } from 'react-router-dom';
import { Button, Box, Stack } from '@mui/material';
import ProductsList from '../widgets/HomePage/ProductsList';
import Test from '../widgets/HomePage/test';
const HomePage = () => {
  return (
    <>
    <Box sx={{display:{xs:'none',sm:'none', md: 'block'}}}>
    
    <Box style={containerStyle}>
      <Box style={{position:'relative',left:'68%', bottom:'25%', width:'260px', height:'60px'}} ><h1 style={{fontFamily: '"Indie Flower", cursive',}}>Feel The World Of A New Tech!</h1></Box>

     <Button variant='contained'  style={{position:'relative',left:'55%', top:'5%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
    <Test/>
    </Box>

    <Box  sx={{display:{xs:'none',sm:'block', md: 'none'}}}>
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'65%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
    <Test/>
    </Box>

    <Box  sx={{display:{xs:'block',sm:'none', md: 'none'}}}>
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'33%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
    <Test/>
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
  
  float: 'none',
}
