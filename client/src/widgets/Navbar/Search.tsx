import SearchIcon from '@mui/icons-material/Search';
import { Stack, TextField, InputAdornment, Input ,List, ListItem, ListItemButton,ListItemText} from "@mui/material"
import * as React from 'react';
import axios from 'axios';
//need to add input validation and senitation!
const Search=()=>{
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/searchProduct?key=${query}`);
      setData(res.data);
    };
    if (query.length > 2) {fetchData()}
    else{
      setData([]);
    }
  }, [query]);


  return(
    <Stack width={'150px'} style={{marginLeft:'-50px'}}>
  <form>
    <TextField type='search' variant="standard" value={query} onChange={e=>{setQuery(e.target.value)}}   placeholder='Search here...'
  InputProps={{
    startAdornment: <InputAdornment position='start'><SearchIcon/>
    </InputAdornment>
  }}
/>
  </form>
 

     <List style={{position:'absolute', top:'50px', right:'100px',backgroundColor:'red'}}>
        {data.map((product:any) => ( //later,take the pruducts here
          <ListItemButton style={{display:'flex', justifyContent:'flex-end',color:'black',}}>
          <ListItem key={product._id} >
          <img src={`http://localhost:5000/searchProduct/${product.image}`} width='50px' height='50px' />
          <ListItemText primary={product.shortDescription}/>
          </ListItem>
          </ListItemButton>
         
        ))}
      </List>

     
    
</Stack>
  )
}

export default Search;




{/*       
        {data.map((product:any) => (
          return <li key={product._id}><img src={`http://localhost:5000/searchProduct/${product.image}`} width='50px' height='50px' /></li>
          
          
          
          
            {product.productName}
           {product.email}
          
        ))}
       */}

// const [searchResult, setSearchResult]= React.useState<any[]>([]);
  // const [key, setKey]= React.useState('');
  // React.useEffect(()=>{
  // const search= async ()=>{
  //  try {
  //   if(!key.trim()){
  //     setSearchResult([]);
  //     return 
  //   }
  //   const res= await axios.get('https://jsonplaceholder.typicode.com/users',{params:{key,limit:5}});
  //   setSearchResult(res.data.data);
  //   console.log(res);
  //  } catch (error) {
  //   console.log(error);
  //  }
  // }
  //    search()
  // },[key])