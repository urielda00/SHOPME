//Internals:
import { UserToggle } from '../widgets/Navbar/UserToggle';
import ShoppingList from '../widgets/Navbar/ShoppingList';
import Search from '../widgets/Navbar/Search';
import Open_Menu from '../widgets/Navbar/Open-Menu';

//Externals:
import {AppBar, Box,Toolbar,Container, IconButton} from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import * as React from 'react';

//Icons:
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

//Types:
interface Props {isActive: boolean};

//Component Here:
const NavBar=() =>{
  const navLinkStyle= ({isActive}:Props)=>{
    return {
      textDecoration:  'none',
      fontWeight: isActive? 'bold' :'normal',
      color:isActive?'black':'black',
      padding: isActive? '1rem' : '1rem'
      }  
  };
  const handleRefresh= ()=>{
    window.location.reload();
  }
  return (
   <AppBar position="static">
    <Container maxWidth="xl" >
     <Toolbar disableGutters style={StyledNavBar} sx={{display:{xs:'none', md: 'flex'}}}>

      <Box  component='nav'  
          style={{marginRight: '320px', display:'flex', 
          justifyContent:'space-between', width:'100px'}}>
         <NavLink style={navLinkStyle} to='/aaa'>SHOPME</NavLink>
         <NavLink style={navLinkStyle} to='/'>EXPLORE</NavLink>
      </Box>

      <Box  component='nav'  style={{marginLeft:'-240px', flexWrap:'nowrap'}} onClick={handleRefresh}>
        <Link to='/' style={{textDecoration:'none', color:'black',letterSpacing: '8px', fontSize:'1.3rem'}}   ><StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>SHOPME</Link>
      </Box>

      <Box  component='nav'  style={{marginRight: '10px',
        display: 'flex', justifyContent:'space-between',  width:'220px'}}>
          <Search/>
          <UserToggle/>
          <ShoppingList /> 
      </Box>   
     </Toolbar>

  {/* for small screens: */}
    <Toolbar disableGutters style={StyledNavBar} sx={{display:{xs:'flex', md: 'none'}}}>
     <Box  component='nav'>
       <Link to='/' style={{textDecoration:'none', color:'black',letterSpacing: '8px', fontSize:'1.3rem'}}><StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>SHOPME </Link>
     </Box>

     <Box  component='nav'style={{marginRight: '20px',display:'flex'}}>
       <IconButton style={{color:'black', marginRight:'5px'}}  size='large'>
       <Link to='/login'></Link> <PermIdentityOutlinedIcon fontSize='large' sx={{color:'black', stroke: "#ffffff", strokeWidth: 1 }}/>
       </IconButton>
       <Open_Menu/>
     </Box>
  
    </Toolbar>
  </Container>
</AppBar>
  );
}
export default NavBar;

const StyledNavBar:React.CSSProperties= {
  position: 'fixed',
  zIndex: '1000',
  width: '100%',
  background: '#fff',
  alignItems: 'center',
  padding: '16px 16px',
  height: '50px',
  marginLeft:'-25px',
  justifyContent:'space-between',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
};