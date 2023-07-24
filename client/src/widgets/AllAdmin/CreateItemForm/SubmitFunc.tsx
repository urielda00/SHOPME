import axios from "axios";
import { FormValues } from "./CreateForm";

const url = "http://localhost:5000/product/createProduct";
const content = { headers: { "Content-Type": "multipart/form-data"}};

 const SubmitFunc = (image1:any,image2:any,data:FormValues) => {
    let formData = new FormData();
    formData.append("screenshot", image1);
    formData.append("screenshot2", image2);
    console.log('image1:',image1);
    console.log('image2:',image2);
    axios.post(url, formData, { headers: { "Content-Type": "multipart/form-data"}})
    .then((res:any) => {
      return res;
    }).catch((error:any)=>{
      return error;
    });
}
export default SubmitFunc;