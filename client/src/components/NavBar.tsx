//Esternal imports:
import React, {useEffect, useRef, useState} from 'react';
import { Link, NavLink,  } from "react-router-dom";
import {TextField, Stack , InputAdornment} from '@mui/material';
import ShoppingList from '../widgets/Navbar/ShoppingList';
import { UserToggle } from '../widgets/Navbar/UserToggle';
//Icons:
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

// import Avatar from '@mui/material/Avatar/Avatar';
// import MenuIcon from '@mui/icons-material/Menu'; //for small screens.




 interface Props {
  isActive: boolean
};


//for the options on click/on small screen:
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Dashboard', 'Logout'];





const NavBar= ()=>{
//for shopping list:

  


  // Navlink style (isActive):
  const navLinkStyle= ({isActive}:Props)=>{
    return {
      textDecoration:  'none',
      fontWeight: isActive? 'bold' :'normal',
      color:isActive?'black':'black',
      padding: isActive? '1rem' : '1rem'
      }
      
  }
  


  return(
     <header style={StyledNavBar}>
      <nav style={{marginRight: '80px', display:'flex', justifyContent:'space-between', width:'100px'}}>
        <NavLink style={navLinkStyle} to='/aaa'>SHOPME</NavLink>
        <NavLink style={navLinkStyle} to='/'>EXPLORE</NavLink>
      </nav>
      
      <nav><Link to='/' style={{textDecoration:'none', color:'black',letterSpacing: '8px', fontSize:'1.3rem'}}><StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>SHOPME</Link></nav> 

      <nav style={{marginRight: '60px', display: 'flex', justifyContent:'space-between', width:'220px'}}>
      <Stack width={'150px'} style={{marginLeft:'-40px'}}>
        <TextField  variant="standard"  placeholder='Search here'
          InputProps={{
            startAdornment: <InputAdornment position='start'><SearchIcon/>
            </InputAdornment>
          }}
         
        /></Stack>
         <UserToggle/>
         <ShoppingList />

         
          
          </nav>
   
      
        
        
</header>
  )
}
export default NavBar;
    

//component's style here:
const StyledNavBar:React.CSSProperties= {
  position: 'fixed',
  zIndex: '1000',
   width: '100%',
   background: '#fff',
   display: 'flex',
   alignItems: 'center',
   padding: '16px 32px',
   height: '50px',
   justifyContent:'space-between',
   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
}

const logoLink={
  textDecoration:'none',
  color:'rgb(66, 41, 100)'
}