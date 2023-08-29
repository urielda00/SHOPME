//Esternal imports:
import React from 'react';
import {MenuItem ,MenuList ,Popper ,Paper,Grow ,ClickAwayListener ,Divider } from '@mui/material';
import {IconButton} from '@mui/material';  
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loggedOut } from '../../../features/userSlice';
import DisplayAvatar from './DisplayAvatar';

//Icons:
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar/Avatar';
// import MenuIcon from '@mui/icons-material/Menu'; //for small screens.



export const UserToggle = () => {
    const {user} = useAppSelector((state:any) => state.user);
    const isLogged = window.sessionStorage.getItem('isLogged');
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const handleLogOut = () => {
      window.sessionStorage.removeItem('logoutIndicator');
      dispatch(loggedOut());
    };
    const handleToggle = () => {setOpen((prevOpen) => !prevOpen);};
    const handleClose = (event: Event | React.SyntheticEvent) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
      ){
        return;
      }
      setOpen(false);
    };
    
    function handleListKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
     // return focus to the button when we transitioned from !open -> open
     const prevOpen = React.useRef(open);
     React.useEffect(() => {
       if (prevOpen.current === true && open === false) {
         anchorRef.current!.focus();
       }
   
       prevOpen.current = open;
     }, [open])
  return (
    <>
    <IconButton 
           style={{marginLeft:'10px', color:'black'}}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{display:{xs:'none', md: 'flex'}}}
        >
            {user && isLogged === 'true'?<DisplayAvatar/>:<PermIdentityOutlinedIcon />}
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              {
                user && isLogged === 'true'?
                <Paper style={{backgroundColor:'#F9F5F6'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >                 
                  <MenuItem  onClick={handleLogOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
                
                :<Paper style={{backgroundColor:'#F9F5F6'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link style={linkStyle} to='/login'>
                       <MenuItem  onClick={handleClose}>Login</MenuItem>
                    </Link>
                    <Divider />
                    <Link style={linkStyle} to='/register'>
                       <MenuItem onClick={handleClose}>Register</MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
              }
              
            </Grow>
          )}
        </Popper>
      </>
  )
}

const linkStyle = {
  textDecoration:'none',
  color:'black'
};