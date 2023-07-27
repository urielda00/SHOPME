import { CSSProperties } from "react";

const containerStyle ={
  backgroundColor:'#fff',
  borderRadius:'10px',
  height:{md:'550px',sm:'550px',xs:'600px'},
  boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)'
};

const insideContainerStyle:React.CSSProperties = {
  marginTop: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const stepsP:CSSProperties = {
  position:'absolute',
  top:'-45px',
  left:'-125px',
  fontSize:'15px',
  color:'#27374D'
};

const stepIconButton:CSSProperties = {
  position:'absolute',
  top:'-48px',
  left:'-200px',
  fontSize:'15px',
  color:'#27374D'
};

export {containerStyle,insideContainerStyle,stepsP,stepIconButton};