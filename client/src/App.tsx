//External imports
import './style.css';
import { Route, Routes } from 'react-router-dom';
//Internal imports
import NavBar from './components/NavBar';
import ThankYouPage from './pages/Home';
import { Send } from './pages/Send';


const App=()=> {  
  return (
  
    <>
    <Routes>
      <Route path='/' element={<NavBar/>}/> 
    </Routes>  
       {/* <Routes>
         <Route path="/" element={<NavBar/>} />
       </Routes> */}
     {/* <NavBar/>
     <Send/> */}
    </>
  );
}

export default App;
