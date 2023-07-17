import React from 'react'
import back1 from '../../../assets/HomePage/back1.jpg';
import { Box,Button } from '@mui/material';
import { Link } from 'react-router-dom';

 
const Home1st = () => {
  

  return (    
    <Box style={containerStyle}>
      <Box style={{position:'relative',left:'68%', bottom:'25%', width:'260px', height:'60px'}} ><h1 style={{fontFamily: '"Indie Flower", cursive',}}>Feel The World Of A New Tech!</h1></Box>
     <Link to='/productsList' style={{position:'relative',left:'52%', top:'5%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}><Button variant='contained' size='large' style={{width:'100%',height:'100%',backgroundColor:'#FC2947'}}>Shop Now</Button></Link>
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
