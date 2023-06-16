//External imports
import './style.css';
import { Route, Routes } from 'react-router-dom';
//Internal imports
import NavBar from './components/NavBar';
import { Send } from './pages/Send';
import NoMatch from './pages/Nomatch';
import ContactNavbar from './components/ContactNavbar';
import ScrollToTop from './widgets/Navbar/ScrollToTop';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import { Cart } from './pages/Cart';
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
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='login' element={<LoginPage/>}/>
    </Routes>  
    
    <ScrollToTop/>

    </>
  );
}

export default App;
