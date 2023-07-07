import { Box } from "@mui/material";
import Filter from "./Filter/Filter";
import ItemInList from "./ItemInList";


 const ProductsListDisplay = ({items,data}:any) => {
  return (
     <>
      <Box sx={containerStyle}>
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
      </>
     )
    }
export default ProductsListDisplay;



const containerStyle={
  width: '100%',
  height: '100vh',
  float: 'none',
  border:'none', 
  display:'flex'
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