import * as React from 'react';

const containerStyle: React.CSSProperties={
  height:'70vh',
  width:'90%',
  backgroundColor:'#fff',
  borderRadius:'20px',
  padding:'30px',
  minWidth:'650px',
  overflow:'hidden',
  display:'flex',
  flexDirection:'column'
};

const listStyle:React.CSSProperties={
  listStyle:'none',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  marginTop:'7px',
  marginBottom:'10px'
};

const textFieldStyle:React.CSSProperties={
  width:'96%',
  marginTop:'5px',
  backgroundColor:'#EDC6B1',
  color:'black'
};
export {textFieldStyle,listStyle,containerStyle};