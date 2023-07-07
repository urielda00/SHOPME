import { Box, InputAdornment, TextField} from '@mui/material';
import { Accordions } from './FilterWidgets/FilterAccordions';

 const Filter = () => {
  return (
    <Box>
      {/* Large screens: */}
    <Box sx={containerLSStyle}>
      <Box style={{textAlign:'center'}}>
        <p style={{fontSize:'18px',marginBottom:'10px'}}>Filter by</p>
      </Box>
      
      <Box sx={{width:'95%'}}>
         <h4>Price:</h4>
         <Box sx={{display:'flex', marginTop:'10px', marginBottom:'10px'}}>
           <TextField label='From'
            InputProps={{endAdornment: <InputAdornment position='end'>$</InputAdornment> }}/>
    
           <TextField
            label='To'
            InputProps={{endAdornment: <InputAdornment position='end'>$</InputAdornment>}}/>
        </Box>
        <Accordions/>
      </Box>
    </Box>

    {/* Medium screens: */}
    <Box sx={containerMStyle}>medium screen</Box>

    {/* Small screens: */}
    <Box sx={containerSStyle}></Box>


    </Box>
  )
}
export default Filter;

const containerLSStyle = {
  display:{xs:'none',sm:'none', md: 'flex'},
  flexDirection:'column',
  alignItems:'center',
  height:'auto',
  width:'100%'
};


const containerMStyle = {
  display:{xs:'none',sm:'flex', md: 'none'},
  flexDirection:'column',
  alignItems:'center',
  height:'auto',
  width:'100%'
};

const containerSStyle = {
  display:{xs:'flex',sm:'none', md:'none' },
  flexDirection:'column',
  alignItems:'center',
  height:'auto',
  width:'100%'
};

