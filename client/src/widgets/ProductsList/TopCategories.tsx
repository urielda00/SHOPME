import { categoryList } from './data/ProductsListPageData';
import { Box, Button } from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { useNavigate } from 'react-router-dom';


const TopCategories = () => {
  const navigate = useNavigate();
  const handleNavigate = (passedCategory:string)=>{
    navigate(`/productsList?toCategory=${passedCategory}`)
  }
  return (
    <Box>
         {/* Large screens: */}
         <Box sx={containerLStyle}>
            <Button sx={buttonStyle} onClick={()=>{navigate(`/productsList?toCategory`)}}>
             <Box sx={{marginRight:'5px'}}>{'See All'}</Box>{<AllInclusiveIcon/>}
          </Button>
         {
          categoryList.slice(1).map((item:any,index:any)=>{
            return(
                <Button  sx={buttonStyle} key={index} 
                 onClick={()=>handleNavigate(item.category)}>
                <Box sx={{marginRight:'5px'}}>{item.name}</Box>{item.icon}
                </Button>             
            )
          })
         }
         </Box>


         {/* Medium screens: */}
         <Box sx={containerMStyle}></Box>



         {/* Small screens: */}
         <Box sx={containerSStyle}></Box>
    </Box>
  )
};

export default TopCategories;

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
  height:'90px',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ECE8DD',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset',
  marginBottom:'2px',
  display:{xs:'none',sm:'flex', md: 'none'}
};

//Small Screen
const containerSStyle={
  width:'100%',
  height:'90px',
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
  