import * as React from 'react';


const container:React.CSSProperties={
  height:'70vh',
  width:'85%',
  backgroundColor:'#fff',
  borderRadius:'20px', 
  display:'flex',
  justifyContent:'space-between',
  padding:'40px',
  minWidth:'900px',
  overflow:'hidden'
};

const childContainer1:React.CSSProperties={
  display:'flex',
  justifyContent:'space-between',
  width:'65%',
  overflowY:'scroll',
  overflowX:'hidden'
};

const liStyle:React.CSSProperties={
  listStyle:'none',
  display:'flex',
  justifyContent:'space-between'
};

export {liStyle,childContainer1,container};