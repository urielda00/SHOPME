import axios from "axios";


 async function readProducts(func:any){
  axios.get(`http://localhost:5000/product/readProducts?`)
  .then(res=>{
   func(res.data);
  }).catch(err=>{return err}) 
}


export default readProducts;