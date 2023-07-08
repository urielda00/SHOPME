import { Box } from "@mui/material";
import Filter from "./Filter/Filter";
import ItemInList from "./ItemInList";

// Style import:
import {filterLcontainerStyle,insideLContainerStyle,containerLStyle,containerSStyle} 
from '../../styles/ProductsListPage/ProductsListDisplay';

 const ProductsListDisplay = ({items,data}:any) => {
  return (
     <>
     {/* for large and medium screens */}
      <Box sx={containerLStyle}>
        {/* Items: */}
         <Box sx={{width:'80%', height:'auto'}}>
            <Box  sx={insideLContainerStyle}>
               <Box sx={insideLContainerStyle}> 
                  {
                   items(data)?.map((item:any)=>{
                    return(
                      <div key={item._id}>
                         <ItemInList item={item}/>
                      </div>
                    )})
                  } 
              </Box>           
            </Box>     
         </Box>
         
        {/* Filter sidebar */}
        <div  style={filterLcontainerStyle}>
          <Filter/>
        </div>
      </Box>

      {/* for small screens */}
      <Box sx={containerSStyle}>
        {/* Items: */}
         <Box sx={{width:'100%', height:'auto'}}>
            <Box  sx={insideLContainerStyle}>
               <Box sx={insideLContainerStyle}> 
                  {
                   items(data)?.map((item:any)=>{
                    return(
                      <div key={item._id}>
                         <ItemInList item={item}/>
                      </div>
                    )})
                  } 
              </Box>           
            </Box>     
         </Box>
        {/* Filter sidebar */}
        {/* <div  style={filterLcontainerStyle}>
          <Filter/>
        </div> */}
      </Box>
    </>
     )
    }
export default ProductsListDisplay;