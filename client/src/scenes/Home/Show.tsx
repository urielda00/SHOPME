const Show= ()=>{
  const data=1 
  const some= 'f3f2f817f58dc9e5bbb2f376007f6da2';

  return (
    <div>
    {
    <img src={`http://localhost:5000/uploads/${some}`} width={200}/>
    }
     </div>
  );
};

export default Show;