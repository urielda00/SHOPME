const containerLStyle={
  width: '100%',
  height: '100vh',
  float: 'none',
  border:'none', 
  display:{xs:'none',sm:'flex', md: 'flex'}
};

const containerSStyle={
  width: '100%',
  height: '100vh',
  float: 'none',
  border:'none', 
  display:{xs:'flex',sm:'none', md: 'none'}
};

const insideLContainerStyle = {
  display:'flex',
  flexDirection:'column',
  width:'100%',
  height:'auto'
};

const filterLcontainerStyle = {
  backgroundColor:'#ECE8DD',
  width:'20%',
  height:'120vh',
  boxShadow:'0 1px 2px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset'
};

export {filterLcontainerStyle,insideLContainerStyle,containerLStyle,containerSStyle};