import { Box } from "@mui/material";

//this is the presentation component:!
type InfiniteDisplayProps = { 
  items : any;
  data : any
}

 const InfiniteDisplay = ({items,data}:InfiniteDisplayProps) => {

  return (
      <Box sx={containerStyle}>
        
         {/* the sort by, and the items: */}
         <Box sx={{backgroundColor:'blue',width:'80%', height:'auto'}}>


            {/* sort: */}
            <Box  sx={{backgroundColor:'#fff',position:'relative', width:'100%', height:'30px'}}>
              <div style={{position:'absolute', right:'14px',top:'3px'}}>
                Sort by...
              </div>
            </Box>


{/* overflow:'hidden', overflowY:'scroll' */}
            {/* actual items: */}
            <div  style={{ width:'100%', height:'auto',display: 'flex',flexDirection:'column'}}>
               <div style={{display:'flex',flexDirection:'column',backgroundColor:'orange', width:'100%',height:'auto',
                   }}> 
                  {
         items(data)?.map((item:any)=>{
            return(
             <div key={item._id} style={{height:'300px'}}>
               <img src={`http://localhost:5000/product/readProducts/${item.image}`} 
                width={'90px'} height={'40px'} />
                <h2>{item.productName}</h2>
            </div>
            )
          }
         )}
       
               
              </div>           
            </div>
            
         </Box>

        {/* the filter sidebar */}
        <div  style={{backgroundColor:'yellow',width:'20%', height:'54vh'}}>
        
        </div>
        {/* {
         items(data)?.map((item:any)=>{
            return(
             <div key={item._id} style={{height:'400px'}}>
               <img src={`http://localhost:5000/product/readProducts/${item.image}`} 
                width={'90px'} height={'40px'} />
                <h2>{item.productName}</h2>
            </div>
            )
          }
         )} */}
      </Box>
     )
    }
export default InfiniteDisplay;



const containerStyle: React.CSSProperties={
  width: '100%',
  height: '100vh',
  display: 'flex',
  float: 'none',
  border:'none',
  backgroundColor:'red',

};



// {/* 
// <Box sx={containerStyle}>
//   <Box sx={{ width:'100%', height:'90px',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#FFEADD'}}>
    
    // {
    //   categoryList.map((item:any,index:any)=>{
        // return(
        //   <Box sx={{marginLeft:'15px',marginRight:'15px'}} key={index}>
        //     <Button  onClick={()=>{
        //       const itemCategory = item.category;
        //       handleCategory(itemCategory)
        //     }} sx={{color:'black',":hover":{fontSize:'15px'}}}><Box sx={{marginRight:'5px'}}>{item.name}</Box>{item.icon}</Button>
         
        //   </Box>
        // )
    //   }




      
//   </Box>


//   <Box sx={{backgroundColor:'green', width:'100%', height:'100%',display:'flex'}}>

//     <Box sx={{backgroundColor:'red', width:'80%', height:'90vh',display:'flex',flexDirection:'column'}}>
      // <Box  sx={{backgroundColor:'purple', width:'100%', height:'30px'}}>the sort by box (date, lastest, price,and more..)</Box>
      // <Box  sx={{backgroundColor:'orange', width:'100%', height:'98%'}}>the actual items box</Box>
//     </Box>
//     <Box sx={{backgroundColor:'yellow', width:'20%', height:'90vh',display:'flex'}}>the filter box</Box>
//   </Box>
// </Box> */}
//   )
// }