import SearchIcon from '@mui/icons-material/Search';
import { Stack, TextField, InputAdornment } from "@mui/material"

const Search=()=>{
  return(
    <Stack width={'150px'} style={{marginLeft:'-50px'}}>
<TextField  variant="standard"  placeholder='Search here'
  InputProps={{
    startAdornment: <InputAdornment position='start'><SearchIcon/>
    </InputAdornment>
  }} 
/></Stack>
  )
}
//later, need to add the actual search logics! 

export default Search;


