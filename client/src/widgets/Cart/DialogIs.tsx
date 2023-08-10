import {Dialog,DialogActions,DialogTitle, Button} from '@mui/material';
import React from 'react';

 const DialogIs = ({open}:any) => {
  const [openPassHelp, setOpenPassHelp] = React.useState(false);
  const handleClickClosePassHelp = () => {setOpenPassHelp(false)};
  React.useEffect(()=>{if(open){setOpenPassHelp(true)}},[open]);
     
  return (
    <Dialog open={openPassHelp} onClose={handleClickClosePassHelp}>
      <DialogTitle>
       {"Cannot check out while the cart is empty!"}
      </DialogTitle>
      <DialogActions>
         <Button onClick={handleClickClosePassHelp}>Close</Button>
      </DialogActions>
    </Dialog>  
  )
}
export default DialogIs;
