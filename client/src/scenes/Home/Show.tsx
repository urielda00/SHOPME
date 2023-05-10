import  React, {useState, useEffect} from 'react';
import axios from "axios";


const Show= ()=>{
  const [data, setData]= useState()
  const some= 'cdd1300209735261d13f90fdfcd1ebdf';




 useEffect(()=>{
      axios
      .get(`http://localhost:5000/product/readProducts`)
       .then(res => {
        setData(res.data);
       })
       .catch(err => console.log(err))
      },[])


  return (
    <div>
      <ul>
        {/* {
        data.map((data)=>return (
         <li key={data._id}>{data.username}</li>
        ))
        } */}
      </ul>
    </div>
  );
};

export default Show; 

//     {
//     <img src={`http://localhost:5000/uploads/${some}`} width={200}/>
//     }