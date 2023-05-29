//Esternal imports:
import React, {useEffect, useRef, useState} from 'react';
import { Link, NavLink,  } from "react-router-dom";
import {TextField, Stack,Button , InputAdornment, MenuItem ,MenuList ,Popper ,Paper, Grow ,ClickAwayListener ,Divider } from '@mui/material';


//Icons:
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
// import Avatar from '@mui/material/Avatar/Avatar';
// import MenuIcon from '@mui/icons-material/Menu'; //for small screens.

export const UserToggle = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
  
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
     let userMenuRef = useRef<HTMLInputElement>(null);
  return (
    <>
    <Button 
           style={{marginLeft:'30px', color:'black'}}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <PermIdentityOutlinedIcon />
        </Button>
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
              <Paper style={{backgroundColor:'#FFE569'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem  onClick={handleClose}>Login</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Register</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
  )
}
