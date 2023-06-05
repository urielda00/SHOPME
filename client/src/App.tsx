//External imports
import './style.css';

//Internal imports
import NavBar from './components/NavBar';
import ThankYouPage from './pages/Home';
import { Send } from './pages/Send';
import Try from './widgets/Navbar/try';
import MongoSearch from './widgets/Navbar/MongoSearch';

const App=()=> {  
  return (
    <>
     <NavBar/>
     <Send/>
     {/* <Try/> */}
     <MongoSearch/>

    </>
  );
}

export default App;
