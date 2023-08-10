import axios from "axios";
import { FormValues } from "./CreateForm";

const url = "https://deployment-shopme.onrender.com/product/createProduct";
const content = { headers: { "Content-Type": "multipart/form-data"}};

 const SubmitFunc = (image1:any,image2:any,image3:any,image4:any,data:FormValues) => {
  let formData:any = new FormData(); 
  formData.append("productName", data.productName);
  formData.append("shortDescription", data.shortDescription);
  formData.append("longDescription", data.longDescription);
  formData.append("quantity", data.quantity);
  formData.append("releaseYear", data.releaseYear);
  formData.append("brand", data.brand);
  formData.append("category", data.category);
  formData.append("company", data.company);
  formData.append("os", data.os);
  formData.append("price", data.price);
  formData.append("screenshot", image1);
  formData.append("screenshot2", image2);
  formData.append("screenshot3", image3);
  formData.append("screenshot4", image4);

    axios.post(url, formData, content)
    .then((res:any) => {
      return res;
    }).catch((error:any)=>{
      return error;
    });
};
export default SubmitFunc;