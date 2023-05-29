import * as React from 'react';
import {Box,Button,
  SwipeableDrawer
  ,List,ListItem
  ,ListItemText,
  ListItemButton,Stack } from '@mui/material';

//Icons:
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type Anchor = 'left';

const ShoppingList =()=> {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
       sx={{width:'300px', zIndex:'1100'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack component='h1' style={{marginLeft:'50px', marginTop:'20px'}}>
        Shopping List
      </Stack>
      <List >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( //later,take the pruducts here
          <ListItemButton style={{display:'flex', justifyContent:'flex-end'}}>
          <ListItem key={text} >
          <ListItemText primary={text} />
          </ListItem>
          </ListItemButton>
          
        ))}
      </List>
      <Stack>
        <Button style={{color:'black'}} onClick={toggleDrawer('left', true)}>
          <CloseOutlinedIcon />
        </Button>
      </Stack>
  </Box>
  );

//need to add - see the full cart button.- link to the user cart.
  return (
    <div style={{marginLeft:'-30px'}}>
      { 
        <React.Fragment >
          <Button style={{color:'black'}} onClick={toggleDrawer('left', true)}><LocalMallOutlinedIcon/></Button>
          <SwipeableDrawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', false)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}

export default ShoppingList;