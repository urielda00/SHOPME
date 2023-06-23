import React from 'react'
import back1 from '../../assets/HomePage/back1.jpg';
import { Box,Button } from '@mui/material';


const Home1st = () => {
  return (
    <Box style={containerStyle}>
      <Box style={{position:'relative',left:'68%', bottom:'25%', width:'260px', height:'60px'}} ><h1 style={{fontFamily: '"Indie Flower", cursive',}}>Feel The World Of A New Tech!</h1></Box>
     <Button variant='contained'  style={{position:'relative',left:'55%', top:'5%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
  )
}

export default Home1st;
const containerStyle: React.CSSProperties={
  backgroundImage: `url(${back1})`,
  // marginBottom: '-80px',
  
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  overflow: 'hidden',
  width: '100%',
  height: '84vh',
  display: 'flex',
  alignItems: 'center',
  float: 'none',
  border:'none'
}
