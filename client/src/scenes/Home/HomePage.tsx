const HomePage= ()=>{
  return(
    <form action="http://localhost:5000/product/createProduct"  method="post" encType="multipart/form-data">
    <input type="file" name="avatar" required />
    <button>submit</button>
  </form>
  );
}


export default HomePage;