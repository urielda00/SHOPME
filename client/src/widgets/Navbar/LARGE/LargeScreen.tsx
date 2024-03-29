import { Box } from '@mui/material';
import { NavLink,Link } from 'react-router-dom';
import Search from '../Widgets/Search';
import { UserToggle } from '../Widgets/UserToggle';
import ShoppingList from '../Widgets/ShoppingList';
import { navLinkStyle } from '../../../components/NavBar';
import React, { useState } from 'react';

//Icons:
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OpenCategories from '../Widgets/OpenCategories';


 const LargeScreen = () => {
  const [hover,setHover]= useState(false);
  return (
    <>
     <Box component='nav'  style={firstBoxStyle}>
         <NavLink style={navLinkStyle} to='/contact'>CONTACT US</NavLink>
           <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} 
             style={{display:'flex', alignItems:'center'}}>
              <Box sx={{":hover":{opacity:'0.5',fontSize:'18px', borderRadius:'30px'}}}>
               <NavLink style={navLinkStyle} to='/productsList'>SHOP</NavLink>
              </Box>
             <OpenCategories hover={hover}/>
             <ArrowDropDownIcon style={{marginLeft:'-10px',marginRight:'10px'}}/>
          </div>
      </Box>

      <Box  component='nav'  style={{marginLeft:'-240px', flexWrap:'nowrap'}}>
         <Link to='/' style={{textDecoration:'none', color:'black',letterSpacing: '8px',
             fontSize:'1.  3rem'}}>
             <StoreOutlinedIcon style={{marginBottom:'-5px', marginRight:'8px'}}/>
             SHOPME
         </Link>
      </Box>

      <Box  component='nav'  style={{marginRight: '10px',display: 'flex', 
          justifyContent:'space-between',  width:'220px'}}>
          <Search/>
          <UserToggle/>
          <ShoppingList/> 
      </Box> 
    </>
  )
};
export default LargeScreen;


const firstBoxStyle: React.CSSProperties = {
  marginRight: '230px',
   display:'flex', 
   zIndex:70, 
  justifyContent:'space-between',
   width:'250px'
};