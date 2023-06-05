import * as React from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const  MongoSearch=()=> {
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

  return (
    <div style={{position:'absolute',top:'450px', left:'150px'}}>
     <TextField type='search'
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}>
       </TextField> 
       <div >
    <table>
      <tbody>
        {data.map((product) => (
          <tr key={product._id}>
           
            <td><img src={`http://localhost:5000/searchProduct/${product.image}`} width='50px' height='50px' /></td><td>{product.productName}</td>
            <td>{product.email}</td> 
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div >
   
        
    </div>
    
    </div>
  );
}


export default MongoSearch;