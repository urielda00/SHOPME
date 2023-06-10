import React from 'react'

const ProductsList = () => {
  return (
    // <div style={{width:'600px', height:'800px', backgroundColor:'red'}}>ProductsList</div>
    <div style={containerStyle}></div>
  )
}

export default ProductsList;
const containerStyle: React.CSSProperties={
  // marginBottom: '-80px',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  float: 'none',
}
