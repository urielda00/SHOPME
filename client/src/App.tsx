//External imports
import './style.css';
import { Route, Routes } from 'react-router-dom';
//Internal imports
import NavBar from './components/NavBar';
import { Send } from './pages/Send';
import NoMatch from './pages/Nomatch';
import ContactNavbar from './components/ContactNavbar';


const App=()=> {  
  return (
  
    <>
    <ContactNavbar/>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Send/>}/> 
      <Route path='*' element={<NoMatch/>}/>
    </Routes>  
    </>
  );
}

export default App;
