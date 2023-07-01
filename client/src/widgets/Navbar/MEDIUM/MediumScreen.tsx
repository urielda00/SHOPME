import { Box , IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Search from '../Widgets/Search';
import OpenMenu from '../Widgets/Open-Menu';

//Icons:
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//Type:
type MediumScreenProps = {
  totalQuantity : any
};

 const MediumScreen = ({totalQuantity}:MediumScreenProps) => {
   return (
     <>
      <Box  component='nav'>
         <Link to='/' style={{textDecoration:'none', color:'black',letterSpacing: '8px',
          fontSize:'1.3rem'}}><StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>
           SHOPME 
         </Link>
      </Box>
      <Box sx={{marginRight:'-30px'}}>
         <Search/>
      </Box>
      <Box  component='nav'style={{display:'flex'}}>
         <Link to='/cart'>
           <IconButton style={{color:'black', marginRight:'-15px'}}  size='large'>
            <ShoppingCartOutlinedIcon fontSize='large'sx={{color:'black',stroke:"#ffffff",strokeWidth:1}}/>
           </IconButton>
           <span style={{width:'20px', height:'20px', borderRadius:'50px', backgroundColor:'#E7CEA6',
              position:'absolute', textAlign:'center', top:'20px', right:'108px'}}>
              {totalQuantity}
           </span>
         </Link>
         <Link to='/login'> 
           <IconButton style={{color:'black', marginRight:'5px'}}  size='large'>
             <PermIdentityOutlinedIcon fontSize='large' 
               sx={{color:'black', stroke:"#ffffff",strokeWidth:1}}/>
           </IconButton>
         </Link>
         <OpenMenu/>
     </Box>
    </>
  )
}

export default MediumScreen;