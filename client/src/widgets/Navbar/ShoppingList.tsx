import * as React from 'react';
import {Box,Button,
  SwipeableDrawer
  ,List,ListItem
  ,ListItemText,
  ListItemButton,Stack, IconButton,Grid } from '@mui/material';
  
import { Link } from 'react-router-dom';
//Icons:
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

//Types:
type Anchor = 'left';

//Component Here:
const ShoppingList =()=> {
  const [state, setState] = React.useState({left: false,});
  //shopping list hover:
  const [hoveringItems, setHoveringItems] = React.useState(true);

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
      <Link style={{textDecoration:'none',color:'black'}} to='/cart'>
      <Grid spacing={0.5} container component='h1' direction="row" alignItems="center" style={{marginLeft:'40px', marginTop:'20px'}} sx={{'hover':{}}} onMouseEnter={() => setHoveringItems(false)}
        onMouseLeave={() => setHoveringItems(true)}>
         <Grid item >
          {hoveringItems?
          <LocalMallOutlinedIcon />:<CloseOutlinedIcon />
         }
        </Grid>
        <Grid item fontSize='32px'>
        Shopping List
        </Grid>
       </Grid>
      </Link>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( //later,take the pruducts here
          <ListItemButton style={{display:'flex', justifyContent:'flex-end'}}>
          <ListItem key={text} >
          <ListItemText primary={text} />
          </ListItem>
          </ListItemButton>
        ))}
      </List>
      <Stack>
    
  <Button
      style={{position:'relative', top:'30vh',borderRadius:'2px'}}
      variant='contained'
      sx={{
        bgcolor:'black',
        ":hover": {
          bgcolor: "#AF5",
          color: "black"
        }
      }}
    >
      <Link to='/cart' style={{textDecoration:'none',color:'white'}}>
      See the full cart
      </Link>
  </Button>
      </Stack>
  </Box>
  );
  return (
    <div style={{marginLeft:'-20px'}}>
      { 
        <React.Fragment >
          <IconButton style={{color:'black',marginRight:'20px',marginLeft:'-1px'}} onClick={toggleDrawer('left', true)}><LocalMallOutlinedIcon/></IconButton>
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