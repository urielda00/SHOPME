import backImg from '../../assets/ThankPage/back1.jpg';

const Styledcontainer= {
  backgroundImage: `url(${backImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode:' multiply',
  overflow: 'hidden',
  opacity: '0.97',
  width: '100%',
  height: '88vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

 const styledImg={
  width: '20%',
  marginTop: '-50px',
  borderRadius: '50%',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
 };
  
const styledBtn={
  width: '100%',
  marginTop: '50px',
  padding: '10px 0',
  background:' #6fd649',
  color:'#fff ',
  border: '0',
  outline: 'none',
  fontSize: '18px',
  borderRadius: '4px',
  cursor: 'pointer',
  boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
  '@media (max-width:768px)':{
    width:'85%',
    marginTop: '25%'
  }
}

const styledPopup= {
  width: '40%',
  height: '35%',
  background: '#fff',
  borderRadius: '6px',
  position: 'absolute',
  top:'50%',
  left: '50%',
  transform: 'translate(-50%,-50%) scale(1) ',
  textAlign: 'center',
  padding:' 0 30px 30px',
  color: '#333',
  visibility: 'visible',
  '@media (max-width:768px)':{
    width: '55%',
    height: '55%'
  }
};

export {styledImg,styledBtn,styledPopup,Styledcontainer}