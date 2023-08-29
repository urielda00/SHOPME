import { FormValues } from "./UpdateForm";
//  "http://localhost:5000/product/createProduct"
// const url =`http://localhost:5000/product/updateProduct`;
// const content = { headers: { "Content-Type": "multipart/form-data"}};

 const SubmitFunc = (image1:any,image2:any,image3:any,image4:any,data:FormValues) => {
  // let formData:any = new FormData(); 
  
  //  formData.append("productID", data.productID);  
  // data.productName && formData.append("productName", data.productName);
  // data.shortDescription && formData.append("shortDescription", data.shortDescription);
  // data.longDescription && formData.append("longDescription", data.longDescription);
  // data.quantity && formData.append("quantity", data.quantity);
  // data.releaseYear && formData.append("releaseYear", data.releaseYear);
  // data.brand && formData.append("brand", data.brand);
  // data.category && formData.append("category", data.category);
  // data.company && formData.append("company", data.company);
  // data.os && formData.append("os", data.os);
  // data.price && formData.append("price", data.price);
  // data.image1 && formData.append("screenshot", image1);
  // data.image2 && formData.append("screenshot2", image2);
  // data.image3 && formData.append("screenshot3", image3);
  // data.image4 && formData.append("screenshot4", image4);
 
  console.log('formDatasssssssssssssssssssssssss');
    // axios.post(url, formData, content)
    // .then((res:any) => {
    //   return res;
    // }).catch((error:any)=>{
    //   return error;
    // });
}
export default SubmitFunc;