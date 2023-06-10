//External imports
import './style.css';
import { Route, Routes } from 'react-router-dom';
//Internal imports
import NavBar from './components/NavBar';
import { Send } from './pages/Send';
import NoMatch from './pages/Nomatch';
import ContactNavbar from './components/ContactNavbar';
import ScrollToTop from './widgets/Navbar/ScrollToTop';


// type Status = boolean;
// let status: Status = true




const App=()=> {  
  return (
  
    <>
    <ContactNavbar/>
    <NavBar/>
    <Routes>
      {
        // here we need to create the ternary operator for protected routes.. check is done by the variable status.
      }
      <Route path='/' element={<Send/>}/> 
      <Route path='*' element={<NoMatch/>}/>
    </Routes>  
    
    <ScrollToTop/>

    </>
  );
}

export default App;
