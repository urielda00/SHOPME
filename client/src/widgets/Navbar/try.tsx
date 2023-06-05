import * as React from 'react';
import axios from 'axios';
import { users } from '../../assets/usersTest/userTest';
import { TextField } from '@mui/material';

const  Try=()=> {
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length > 0) {fetchData()}
    else{
      setData([]);
    }
  }, [query]);
console.log(data);
  return (
    <div style={{marginBottom:'200px'}}>
      <div >
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item:any) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div >
   
        <TextField type='search'
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}>
       </TextField>
    </div>
    
    </div>
  );
}


export default Try;