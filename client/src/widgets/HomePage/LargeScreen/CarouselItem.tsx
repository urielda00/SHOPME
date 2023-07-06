export const items = [
  {
    img: 'Item1',
    h1: 'S23 Ultra Series'
  },
  {
    img: 'Item2',
    h1: 'Apple Watch 4'
  },
  {
    img: 'Item3',
    h1: 'EarBuds Pro 3'
  },
];
type CarouselItemProps = {
item:{
  img:string
  h1:string
},
width:string
};


export const CarouselItem = ({ item, width }:CarouselItemProps) => {
  return (
    <div style={{ width: width, display:'inline-flex',alignItems:'center',
       justifyContent:'center', height:'100vh'}}> 
      <h1 style={{position:'absolute', top:'7.5vw'}}>{item.h1}</h1>
      <img alt='' src={require(`../../../assets/HomePage/5nd/${item.img}.jpg`)}
       style={{width:'80%',height:'75vh',borderRadius:'30px',objectFit:'cover'}}/>
    </div>
  );
};

