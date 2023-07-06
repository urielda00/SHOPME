import back1 from '../../../assets/HomePage/3nd/some.png';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';

 const SHome3nd = () => {
  return (
     <Box 
        style={{display:'flex',width:'100%',height:'50vh',
        flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
         <div>
           <img alt='' src={back1} width={'100%'} height={'70%'}/>
         </div>
         <Link to='/' style={{textDecoration:'none',fontSize:'15px',color:'black'}}>
           <Box sx={{":hover":{opacity:'0.7'}}} style={{width:'120px',height:'40px',
              display:'flex', alignItems:'center',justifyContent:'center', borderRadius:'50px', backgroundColor:'white'}}>
             <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
               Buy Now
               <ChevronRightIcon/>
             </div>
           </Box>
         </Link>
    </Box>

  )
}
export default SHome3nd;
