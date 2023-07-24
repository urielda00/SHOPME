import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";

export const Test3 = () => {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const upload = (e:any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("screenshot", file);
    formData.append("screenshot2", file2);
    Axios.post("http://localhost:5000/product/createProduct", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("Success ", res);
    });
  };

  return (
    <div>
     <input
        type="file"
        name="screenshot"
        onChange={(e:any) => {
          setFile(e.target.files[0]);
        }}
      />

        <input
        type="file"
        name="screenshot2"
        onChange={(e:any) => {
          setFile2(e.target.files[0]);
        }}
      />
      <button onClick={(e) => upload(e)}>Submit</button>
</div>
  )
}
