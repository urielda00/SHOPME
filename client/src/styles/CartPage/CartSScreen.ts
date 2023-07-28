import * as React from 'react';


const containerStyle:React.CSSProperties={
  height:'90vh',
  width:'90%',
  backgroundColor:'#fff',
  borderRadius:'20px',
  padding:'20px',
  marginTop:'30px',
  display:'flex',
  flexDirection:'column',
  overflow:'hidden',
  minWidth:'380px'
};

const liStyle:React.CSSProperties={
  listStyle:'none',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  marginTop:'4px',
  height:'120px',
  boxShadow:'0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) '
};
export {liStyle,containerStyle};