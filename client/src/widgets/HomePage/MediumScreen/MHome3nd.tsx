import back1 from '../../../assets/HomePage/3nd/some.png';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';

 const MHome3nd = () => {
  return (
     <Box 
        style={{display:'flex',width:'100%',height:'100vh',
        flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
         <div>
           <img alt='' src={back1} width={'100%'} height={'80%'}/>
         </div>
         <Link to='/productsList?toCategory=phone&brand=Apple' style={{textDecoration:'none',fontSize:'20px',color:'black'}}>
           <Box sx={{":hover":{opacity:'0.7'}}} style={{width:'200px',height:'60px',
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
export default MHome3nd;
