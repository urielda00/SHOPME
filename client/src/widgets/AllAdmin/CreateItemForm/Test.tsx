import { useState } from 'react'

export const Test = () => {
  const [files,setFile] = useState<any>();
  
  const handleChange = (e:any)=>{
    setFile(e.target.files)
    console.log(files);
  };

  const handleUpload =()=>{
    const formData = new FormData();
    for(let i=0;i<files.length;i++){
      formData.append(`images[${i}]`,files)
    }
    fetch('http://localhost:5000/product/istest',
    {
      method:'POST',
      body:formData
    })
  }


  return (
    <div>
      <input type='file' name='images' multiple onChange={handleChange}/>
      <button onClick={handleUpload}>submit</button>
    </div>
  )
}
