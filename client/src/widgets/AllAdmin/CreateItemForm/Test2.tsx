import React from 'react'
import axios from 'axios';


export const Test2 = () => {

  let fileReader:any;
  
  const handleFileRead = (e:any) => {
    const content = fileReader.result;
    console.log(content)
    axios.post('http://localhost:5000/product/test2',content)
    // … do something with the 'content' …
  };
  
  const handleFileChosen = (file:any) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div>
      
      <input onChange={(e:any )=> handleFileChosen(e.target.files[0])} type="file" id='productImages' name='productImages' multiple/>
      <button>submit</button>
    </div>
  )
}
