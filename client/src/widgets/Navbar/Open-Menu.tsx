import * as React from 'react';
import {Box,Button,
  SwipeableDrawer
  ,List,ListItem
  ,ListItemText,
  ListItemButton,Stack } from '@mui/material';

//Icons:
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';

type Anchor = 'left';

const OpenMenu =()=> {
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
       sx={{width:'90vw', zIndex:'1100', display:'flex', justifyContent:'center'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItemButton style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
          <ListItem key={1} >
          <ListItemText primary='Home'/>
          </ListItem>
          </ListItemButton>

          <ListItemButton style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
          <ListItem key={2} >
          <ListItemText primary='Shop'/>
          </ListItem>
          </ListItemButton>

          <ListItemButton style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
          <ListItem key={3} >
          <ListItemText primary='Explore'/>
          </ListItem>
          </ListItemButton>

          <ListItemButton style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
          <ListItem key={4} >
          <ListItemText primary='Contact'/>
          </ListItem>
          </ListItemButton>

          <Stack>
        <Button style={{color:'black'}} onClick={toggleDrawer('left', true)}>
          <CloseOutlinedIcon />
        </Button>
      </Stack>
      </List>
  </Box>
  );

//need to add - see the full cart button.- link to the user cart.
  return (
    <div style={{marginLeft:'-20px'}}>
      { 
        <React.Fragment >
          {/* <Button style={{color:'black'}} onClick={toggleDrawer('left', true)}><MenuIcon/></Button> */}

          <IconButton style={{color:'black'}} onClick={toggleDrawer('left', true)} size='large'>
            <MenuIcon fontSize='large' sx={{ stroke: "#ffffff", strokeWidth: 1 }}/>
            </IconButton>
            
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

export default OpenMenu;