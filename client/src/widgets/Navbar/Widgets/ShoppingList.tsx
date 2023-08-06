import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Icons:
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



//Component Here:
const ShoppingList =()=> {
  const {totalQuantity}= useSelector((state:any)=>state.allCart);
  return (
    <>
    <Link to='/cart'><IconButton style={{color:'black',marginRight:'20px',marginLeft:'-10px'}}>
    <ShoppingCartOutlinedIcon/>   
    </IconButton>
    <span style={{width:'20px', height:'20px', borderRadius:'50px', backgroundColor:'#E7CEA6',
       position:'absolute', textAlign:'center', top:'23px', right:'43px', color:'black'}}>
          {totalQuantity}
    </span>
    </Link>
    </>
  );
}

export default ShoppingList;