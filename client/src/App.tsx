//External imports
import './style.css';

//Internal imports
import NavBar from './components/NavBar';
import ThankYouPage from './pages/Home';
import { Send } from './pages/Send';


const App=()=> {  
  return (
    <>
     <NavBar/>
     <Send/>
    </>
  );
}

export default App;
