import  React, {useState, useEffect} from 'react';
import axios from "axios";


const Some= ()=>{
  const [data, setData]= useState()




 useEffect(()=>{
      axios
      .get('http://localhost:5000/product/readProducts')
      .then(res => {
        setData(res.data);
       })
       .catch(err => console.log(err))
      },[])


  return (
    <div>
      <ul>
        {
        data?.map(data=>(
         <li key={data._id}><img src={`http://localhost:5000/uploads/${data.productImage}`} width={200}/>
         <h1>{data.shortDescription}</h1> <h4>price:{data.price}</h4> </li>
        ))
        }
      </ul>
    </div>
  );
};

export default Some; 
//     {
//     <img src={`http://localhost:5000/uploads/${some}`} width={200}/>
//     }