import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

//Icons:
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



//Component Here:
const ShoppingList =()=> {
  return (
    <Link to='/cart'><IconButton style={{color:'black',marginRight:'20px',marginLeft:'-10px'}}>
    <ShoppingCartOutlinedIcon/>
    </IconButton>
    </Link>
  );
}

export default ShoppingList;