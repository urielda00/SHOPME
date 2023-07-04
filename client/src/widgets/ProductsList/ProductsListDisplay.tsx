import { Box } from "@mui/material";
import Filter from "./Filter";
import SortBy from "./SortBy";
import ItemInList from "./ItemInList";

//this is the presentation component:!

//Types here:
type InfiniteDisplayProps = { 
  items : any;
  data : any
}




 const ProductsListDisplay = ({items,data}:InfiniteDisplayProps) => {
  return (
    
      <Box sx={containerStyle}>

         {/* the sort by, and the items: */}
         <Box sx={{width:'80%', height:'auto'}}>
            {/* sort: */}
            <Box  sx={{backgroundColor:'#fff',position:'relative', width:'100%', height:'30px'}}>
              <SortBy/>
            </Box>
           
            {/* actual items: */}
            <div  style={{ width:'100%', height:'auto',display: 'flex',flexDirection:'column'}}>
               <div style={{display:'flex',flexDirection:'column', width:'100%',height:'auto',
                   }}> 
                  {
         items(data)?.map((item:any)=>{
            return(
             <div key={item._id}>
              <ItemInList item={item}/>
            </div>
            )
          }
         )} 
              </div>           
            </div>     
         </Box>
        {/* the filter sidebar */}
        <div  style={{backgroundColor:'yellow',width:'20%', height:'70vh'}}>
        <Filter/>
        </div>
      </Box>
     )
    }
export default ProductsListDisplay;



const containerStyle: React.CSSProperties={
  width: '100%',
  height: '100vh',
  display: 'flex',
  float: 'none',
  border:'none',
  
};





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