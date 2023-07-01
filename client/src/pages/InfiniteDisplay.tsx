import { Box } from '@mui/material';
import React from 'react'

type InfiniteDisplayProps = { 
  items : any;
  data : any
}

 const InfiniteDisplay = ({items, data}:InfiniteDisplayProps) => {
  return (
//     items(data)?.map((item:any)=>{
//       return(
//          <div key={item._id} style={{height:'400px'}}>
//            <img src={`http://localhost:5000/product/readProducts/${item.image}`} width={'90px'} height={'40px'} />
//            <h2>{item.productName}</h2>
//          </div>
//   )
// })
<Box sx={containerStyle}>
a
</Box>
  )
}
export default InfiniteDisplay;


const containerStyle: React.CSSProperties={
  overflow: 'hidden',
  width: '100%',
  height: '84vh',
  // display: 'flex',
  // alignItems: 'center',
  backgroundColor:'red',
  float: 'none',
  border:'none'
}