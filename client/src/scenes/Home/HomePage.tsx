const HomePage= ()=>{
  return(
    <div >
      <h1>Create new product now!</h1>
      <div>
    <form style={{display:'flex', alignItems:'center', justifyContent:'center'}} action="http://localhost:5000/product/createProduct" method="post" encType="multipart/form-data">



    <input type="text" name="shortDescription" required placeholder="shortDescription" />
    <textarea name="longDescription" required placeholder="longDescription"/>
    <input type="number" name="price" min={1} required placeholder="price"/>
    <input type="number" min={0} name="quantity" required placeholder="quantity"/>
    <input type="file" name="productImage" required/>
    <button>submit</button>

    
  </form>
  </div>
  </div>
  );
}


export default HomePage;