//Large Screen
const containerLStyle={
  width:'100%',
  height:'90px',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ECE8DD',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset',
  marginBottom:'2px',
  display:{xs:'none',sm:'none', md: 'flex'}
};

//Medium Screen
const containerMStyle={
  width:'100%',
  height:'70px',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ECE8DD',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset',
  marginBottom:'2px',
  display:{xs:'none',sm:'flex', md: 'none'}
};

const buttonMStyle = {
  marginLeft:'10px',
  marginRight:'10px',
  color:'black',
  fontSize:'10px' ,
  ":hover":{color:'grey'}
};

//Small Screen
const containerSStyle={
  width:'100%',
  height:'80px',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ECE8DD',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset',
  marginBottom:'2px',
  display:{xs:'flex',sm:'none', md:'none' }
};

const buttonStyle = {
  marginLeft:'15px',
  marginRight:'15px',
  color:'black',
  ":hover":{color:'grey'}
};


export {buttonMStyle,buttonStyle,containerLStyle,containerMStyle,containerSStyle};