//this page is tamplate for styled-components., need to change later to ext tsx.

import styled from 'styled-components';
// import backImg from '../image/back1.jpg';
import backImg from '../assets/back1.jpg'


const ThankYouPage= ()=>{
  return(
    <Styledcontainer>
      
     <input/>
      <div className='under-nav-notHome'>
        <div style={styledPopup}>
          {/* <img src={checkImg} style={styledImg} alt='info-recived!'></img> */}
          <h2>Thank you!</h2>
          <p>Your details sent successfully</p>
          <form action="/">
           <button style={styledBtn}>Press here to return</button>
          </form>
          {/* <input type="file" multiple/> */}
       </div>
       
     </div>
    
  </Styledcontainer>
  )
}


export default ThankYouPage;








const Styledcontainer= styled.div`
 background-image: url(${backImg});
  margin-bottom: -80px;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  overflow: hidden;
  opacity: 0.97;
  width: 100%;
  height: 100vh;
  float: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  height: '45%',
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