import { useSelector } from "react-redux";
import { Box,SpeedDial,SpeedDialIcon,SpeedDialAction } from "@mui/material";

import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const actions = [
  { icon: (<Link to={'/createItem'}><NoteAddIcon/></Link>), name: 'New Item'},
  { icon:( <Link to={'/updateItem'}><AutorenewIcon /></Link>), name: 'Update Item'},
  { icon: (<Link to={'/deleteItem'}><DeleteOutlineIcon /></Link>), name: 'Delete Item'}
];


 const AdminPanel = ({children}:any) => {
  const {isAdmin}= useSelector((state:any)=>state.user)
  const isLogged = window.sessionStorage.getItem('isLogged');
  return (
    <>
    {
     isAdmin && isLogged === 'true'? <Box>
     <SpeedDial
       ariaLabel="SpeedDial basic example"
       sx={{ position: 'fixed', bottom: 16, right: 16 ,zIndex:1}}
       icon={<SpeedDialIcon />}
     >
       {actions.map((action) => (
         <SpeedDialAction
           key={action.name}
           icon={action.icon}
           tooltipTitle={action.name}
         />
       ))}
     </SpeedDial>
   </Box> : <div hidden></div>
    }
    </>
  )
}
export default AdminPanel;







