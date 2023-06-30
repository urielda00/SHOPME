//Internals:
import { UserToggle } from '../widgets/Navbar/UserToggle';
import ShoppingList from '../widgets/Navbar/ShoppingList';
import Search from '../widgets/Navbar/Search';
import OpenMenu from '../widgets/Navbar/Open-Menu';

//Icons:
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';//Types:

//Externals:
import { useSelector} from 'react-redux';
import {Box,Toolbar,IconButton} from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import * as React from 'react';

// const userName= window.sessionStorage.getItem('userNameHere');



//Types:
interface Props {isActive: boolean};


//Component Here:
const NavBar=() =>{
  const {totalQuantity}= useSelector((state:any)=>state.allCart);


  const navLinkStyle= ({isActive}:Props)=>{
    return {
      textDecoration:  'none',
      fontWeight: isActive? 'bold' :'normal',
      color:isActive?'black':'black',
      padding: isActive? '1rem' : '1rem'
      }  
  };
 
  return (
   <>

    {/* for large screens: */}
     <Toolbar disableGutters style={StyledNavBar} sx={{display:{xs:'none',sm:'none', md: 'flex'}}}>
      <Box  component='nav'  
       style={{marginRight: '230px', display:'flex', 
       justifyContent:'space-between', width:'240px'}}>
         <NavLink style={navLinkStyle} to='/infinity'>ABOUT</NavLink>
         <NavLink style={navLinkStyle} to='/contact'>CONTACT US</NavLink>
      </Box>

      <Box  component='nav'  style={{marginLeft:'-240px', flexWrap:'nowrap'}}>
        <Link to='/' style={{textDecoration:'none', color:'black',letterSpacing: '8px', fontSize:'1.3rem'}}><StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>SHOPME</Link>
      </Box>

      <Box  component='nav'  style={{marginRight: '10px',
        display: 'flex', justifyContent:'space-between',  width:'220px'}}>
          <Search/>
          <UserToggle/>
          <ShoppingList/> 
      </Box>   
     </Toolbar>

  {/* for small screens: */}
    <Toolbar disableGutters style={StyledMiddleNavBar} sx={{display:{xs:'none',sm:'flex', md: 'none'}}}>
     <Box  component='nav'>
       <Link to='/' style={{textDecoration:'none', color:'black',letterSpacing: '8px', fontSize:'1.3rem'}}><StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>SHOPME </Link>
     </Box>
     <Box sx={{marginRight:'-30px'}}>
       <Search/>
     </Box>
     <Box  component='nav'style={{display:'flex'}}>
      <Link to='/cart'>
         <IconButton style={{color:'black', marginRight:'-15px'}}  size='large'>
           <ShoppingCartOutlinedIcon fontSize='large' sx={{color:'black', stroke:"#ffffff",strokeWidth:1}}/>
         </IconButton>
         <span style={{width:'20px', height:'20px', borderRadius:'50px', backgroundColor:'#E7CEA6', position:'absolute', textAlign:'center', top:'20px', right:'108px'}}>{totalQuantity}</span>
       </Link>
       <Link to='/login'> <IconButton style={{color:'black', marginRight:'5px'}}  size='large'>
         <PermIdentityOutlinedIcon fontSize='large' sx={{color:'black', stroke:"#ffffff",strokeWidth:1}}/>
         </IconButton>
       </Link>
       
       <OpenMenu/>
     </Box>
    </Toolbar>

    {/* for x-small screens: */}
    <Toolbar disableGutters style={StyledXSmallNavBar} sx={{display:{xs:'flex',sm:'none', md: 'none'}}}>
     <Box  component='nav'>
       <Link to='/' style={{textDecoration:'none',color:'black',letterSpacing:'8px',fontSize:'1.3rem'}}>
        <StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>
        SHOPME 
        </Link>
        <div style={{marginLeft:'35%', marginTop:'10%', marginBottom:'-7%'}}><Search/></div>
     </Box>
    
     <Box  component='nav'style={{display:'flex'}}>
     <Link to='/cart'>
         <IconButton style={{color:'black', marginRight:'-15px'}}  size='large'>
           <ShoppingCartOutlinedIcon fontSize='large' sx={{color:'black', stroke:"#ffffff",strokeWidth:1}}/>
         </IconButton>
       </Link>
       <Link to='/login'> <IconButton style={{color:'black', marginRight:'5px'}}  size='large'>
         <PermIdentityOutlinedIcon fontSize='large'
          sx={{color:'black', stroke: "#ffffff", strokeWidth: 1 }}/>
         </IconButton>
         <span style={{width:'20px', height:'20px', borderRadius:'50px', backgroundColor:'#E7CEA6', position:'absolute', textAlign:'center', top:'20px', right:'108px'}}>{totalQuantity}</span>
       </Link>
       <OpenMenu/>
     </Box>
    </Toolbar>
</>
  );
}
export default NavBar;

const StyledNavBar:React.CSSProperties= {
  position: 'sticky',
  zIndex:10,
  top:'0',
  width: '100%',
  background: '#fff',
  alignItems: 'center',
  padding: '16px 16px',
  height: '90px',
  justifyContent:'space-between',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
};

const StyledMiddleNavBar:React.CSSProperties= {
  position: 'sticky',
  top:'0',
  zIndex:10,
  width: '100%',
  background: '#fff',
  alignItems: 'center',
  padding: '16px 16px',
  height: '90px',
  justifyContent:'space-between',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
};

const StyledXSmallNavBar:React.CSSProperties= {
  position: 'sticky',
  top:'0',
  zIndex:10,
  width: '100%',
  background: '#fff',
  alignItems: 'center',
  padding: '16px 16px',
  height: '90px',
  justifyContent:'space-between',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
};