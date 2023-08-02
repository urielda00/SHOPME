import SearchIcon from '@mui/icons-material/Search';
import { ClickAwayListener,Stack, TextField, InputAdornment,
  List, ListItem, ListItemButton,ListItemText} from "@mui/material"
import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



//need to add input validation and senitation!
const Search=()=>{
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);


  //to handle close while toggling outside the search area:
  const anchorRef = React.useRef<HTMLElement>(null);
  const handleClose = (event: Event | React.SyntheticEvent) => {
      if ( anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)){
       return;
      }
      setQuery('');
    };

  //Send get req with the key as req.query.
  React.useEffect(() => {
    const fetchData = async () => {
    const res = await axios.get(`https://deployment-shopme.onrender.com/product/searchProduct?key=${query}`);
      setData(res.data);
    };
    if (query.length > 3) {fetchData()}
    else{
      setData([]);
    } 
  }, [query]);

  return(
    <Stack width={'150px'} style={{marginLeft:'-50px'}} id='ScrollStyle'>
        {/* for large screens */}
      <Stack sx={{display:{xs:'none',sm:'none', md: 'flex'}}}>
        <TextField autoComplete='' type='search' variant="standard" value={query}
         onChange={e=>{setQuery(e.target.value)}} placeholder='Search here...'
        InputProps={{
         startAdornment: 
         <InputAdornment position='start'><SearchIcon/></InputAdornment>
         }}
        />
  
      <ClickAwayListener onClickAway={handleClose}>
        <List style={ListStyle}>
          {
          data?.map((product:any) => ( //later,take the pruducts here
          <Link to={`/product/${product._id}`} style={{textDecoration:'none',color:'black'}}>
           <ListItemButton key={product._id} onClick={handleClose} style={ListItemButtonStyle}>
             <ListItem   style={{display:'flex', justifyContent:'space-around'}}>
              
               <img alt='' src={`https://deployment-shopme.onrender.com/searchProduct/${product.image}`} style={imgStyle}/>
               <ListItemText primary={product.shortDescription} secondary={`${product.price}$`} />
            </ListItem>
          </ListItemButton></Link>
          ))
          }
         </List>
       </ClickAwayListener>  
    </Stack>

{/* for medium screens */}
<Stack sx={{display:{xs:'none',sm:'flex', md: 'none'}}}>
      <TextField autoComplete='' type='search' variant="standard" value={query}
       onChange={e=>{setQuery(e.target.value)}} placeholder='Search here...'
       InputProps={{
        startAdornment: 
        <InputAdornment position='start'><SearchIcon/></InputAdornment>
        }}
       />
  
      <ClickAwayListener onClickAway={handleClose}>
        <List style={mediumListStyle}>
          {
          data?.map((product:any) => ( //later,take the pruducts here
          <Link to={`/product/${product._id}`} style={{textDecoration:'none',color:'black'}}>
           <ListItemButton key={product._id} onClick={handleClose} style={ListItemButtonStyle}>
             <ListItem   style={{display:'flex', justifyContent:'space-around'}}><ListItemText primary={product.shortDescription} secondary={`${product.price}$`} />
               <img alt='' src={`https://deployment-shopme.onrender.com/searchProduct/${product.image}`} style={imgStyle}/>
             </ListItem>
          </ListItemButton>
          </Link>
          ))
          }
         </List>
       </ClickAwayListener>  
</Stack>

{/* for xs screens */}
<Stack sx={{display:{xs:'flex',sm:'none', md: 'none'}}}>
      <TextField autoComplete='' type='search' variant="standard" value={query}
       onChange={e=>{setQuery(e.target.value)}} placeholder='Search here...'
       InputProps={{
        startAdornment: 
        <InputAdornment position='start'><SearchIcon/></InputAdornment>
        }}
       />
  
      <ClickAwayListener onClickAway={handleClose}>
        <List style={smallListStyle}>
          {
          data?.map((product:any) => ( //later,take the pruducts here
          <Link to={`/product/${product._id}`} style={{textDecoration:'none',color:'black'}}>
           <ListItemButton key={product._id} onClick={handleClose} style={ListItemButtonStyle}>
             <ListItem   style={{display:'flex', justifyContent:'space-around'}}><ListItemText primary={product.shortDescription} secondary={`${product.price}$`} />
               <img alt='searchPhoto' src={`https://deployment-shopme.onrender.com/searchProduct/${product.image}`} style={imgStyle}/>
              </ListItem>
          </ListItemButton></Link>
          ))
          }
         </List>
       </ClickAwayListener>  
</Stack>
</Stack>
  )
};

export default Search;


const imgStyle:React.CSSProperties={
marginRight:'15px', borderRadius:'5px',  marginLeft:'-15px',
  width:'50px', height:'50px'};

const ListItemButtonStyle:React.CSSProperties={color:'black',borderBottom:'1px black outset'};

const ListStyle:React.CSSProperties={
position:'absolute', top:'65px',
right:'120px',backgroundColor:'#F9F5F6',borderRadius:'5px',
overflowY:'auto',maxHeight:'300px',
boxShadow:'-12px 17px 27px -5px rgba(0,0,0,0.32)', scrollbarColor:'red '};

const smallListStyle:React.CSSProperties={
position:'absolute', top:'130px',direction:'rtl',
left:'20px',backgroundColor:'#F9F5F6',borderRadius:'5px',
overflowY:'auto',maxHeight:'300px',
boxShadow:'12px 17px 27px 5px rgba(0,0,0,0.32)', scrollbarColor:'red '};


const mediumListStyle:React.CSSProperties={
  position:'absolute', top:'90px',
  left:'30%',backgroundColor:'#F9F5F6',borderRadius:'5px',
  overflowY:'auto',maxHeight:'300px',
  boxShadow:'-8px 17px 20px -5px rgba(0,0,0,0.32)', scrollbarColor:'red '};
