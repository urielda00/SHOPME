import * as React from 'react';
import { useSelector} from 'react-redux';
import { Toolbar } from '@mui/material';
import LargeScreen from '../widgets/Navbar/LARGE/LargeScreen';
import MediumScreen from '../widgets/Navbar/MEDIUM/MediumScreen';
import SmallScreen from '../widgets/Navbar/SMALL/SmallScreen';
// const userName= window.sessionStorage.getItem('userNameHere');

//Types:
interface Props {isActive: boolean};

 const NavBar=() =>{
  const {totalQuantity}= useSelector((state:any)=>state.allCart);
  return (
   <>
     {/* for large screens: */}
      <Toolbar disableGutters style={StyledNavBar} sx={{display:{xs:'none',sm:'none', md: 'flex'}}}>
        <LargeScreen/>
      </Toolbar>

     {/* for medium screens: */}
     <Toolbar disableGutters style={StyledMiddleNavBar} sx={{display:{xs:'none',sm:'flex', md: 'none'}}}>
       <MediumScreen totalQuantity={totalQuantity}/>
     </Toolbar>

     {/* for small screens: */}
     <Toolbar disableGutters style={StyledXSmallNavBar} sx={{display:{xs:'flex',sm:'none', md: 'none'}}}>
       <SmallScreen totalQuantity={totalQuantity}/>
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
 
export const navLinkStyle= ({isActive}:Props)=>{
  return {
    textDecoration:  'none',
    fontWeight: isActive? 'bold' :'normal',
    color:isActive?'black':'black',
    padding: isActive? '1rem' : '1rem'
    }  
};