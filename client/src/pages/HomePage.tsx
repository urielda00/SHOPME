import * as React from 'react';
import back1 from '../assets/HomePage/back1.jpg';
import { Link } from 'react-router-dom';
import { Button, Box, Stack } from '@mui/material';
import Home2nd from '../widgets/HomePage/Home2nd';
import Home3nd from '../widgets/HomePage/Home3nd';
import Home5nd from '../widgets/HomePage/Home5nd';
import Home1st from '../widgets/HomePage/Home1st';
import Home4nd from '../widgets/HomePage/Home4nd';
import Home6nd from '../widgets/HomePage/Home6nd';
const HomePage = () => {
 
    
  return (
    <>
    <Box sx={{display:{xs:'none',sm:'none', md: 'block'}}}>
      <Home1st/>
      <Home2nd/>
      <Home3nd/>
      <Home4nd/>
      <Home5nd/>
      {/* <Home6nd/> */}
    </Box>

    <Box  sx={{display:{xs:'none',sm:'block', md: 'none'}}}>
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'65%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
    </Box>

    <Box  sx={{display:{xs:'block',sm:'none', md: 'none'}}}>
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'33%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
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
  height: '84vh',
  display: 'flex',
  alignItems: 'center',
  float: 'none',
  border:'none'
}
