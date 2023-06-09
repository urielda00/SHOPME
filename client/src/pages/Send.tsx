import * as React from 'react';
export const Send = () => {
  return (
    <div style={Styledcontainer}> 
    <div style={{backgroundColor:'red', height:'50px', width:'40px'}}>aaa</div>
    <form action="http://localhost:5000/product/createProduct" method='post' encType="multipart/form-data">
       <input type="file" multiple name='productImages'/>
       <input type='text' name='shortDescription' placeholder='shortDescription' minLength={20} maxLength={23}/>
       <input type='text' name='longDescription' placeholder='longDescription'/>
       <input type='number' name='price' placeholder='price'/>
       <input type='number' name='quantity' placeholder='quantity'/>
       <input type='text' name='category' placeholder='category'/>
       <input type='text' name='productName' placeholder='productName'/>
       <a href='#some'>aaaa</a>
       <button>send</button>
       
      </form>
     
    </div>
  )
}


const Styledcontainer:React.CSSProperties= {
  marginBottom: '-80px',
  marginTop:'80px',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
  float: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}