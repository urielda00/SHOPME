//External imports
import './style.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState,useEffect } from 'react'; //Delete this, and the pop-up later.

//Reuseable components imports:
import NavBar from './components/NavBar';
import ContactNavbar from './components/ContactNavbar';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoutes';

//Pages imports:
import NomatchPage from './pages/NomatchPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SingleItemPage from './pages/SingleItemPage';
import ProductsListPage  from './pages/ProductsListPage';
import UserPage from './pages/UserPage';
import CreateItem  from './pages/CreateItem';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassPage from './pages/ForgetPassPage';
import ResetPassPage from './pages/ResetPassPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import Footer from './components/Footer';
import CheckOut from './pages/CheckOut';
import AdminPanel from './components/AdminPanel';
import UpdateItem from './pages/UpdateItem';
import DeleteItem from './pages/DeleteItem';
import AdminProtectedRoutes from './components/AdminProtectedRoutes';


const App = () => {
  const { pathname } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
     const timer = setTimeout(() => {
       setShowPopup(true);
     }, 3000); // 3 seconds
 
     return () => clearTimeout(timer);
   }, []);
   
    // Handle closing the popup
 const closePopup = () => {
  setShowPopup(false);
};
useEffect(() => {
  if (showPopup) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  } else {
    document.body.style.overflow = 'auto'; // Enable scrolling
  }
}, [showPopup]);


  return (
     <>
       {
         showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Attention!</h2>
            <h3>This site use the render.com deployment free plan for the server side</h3>
            <h3>Meaning that the first connect to the server will take between 1-2 minutes, and then the website will work as usual</h3>
            <div>
             <button onClick={closePopup}>Close</button> 
            </div>
            
          </div>
        </div>
      )}
       <ContactNavbar/>
       <NavBar/>
       <AdminPanel/>
       <Routes>
         {
           // here we need to create the ternary operator for protected routes.. check is done by the    variable status.
         }
         <Route path='/' element={<HomePage/>}/> 
         <Route path='/product/:productId' element={<SingleItemPage/>}/>
         <Route path='/cart' element={<CartPage/>}/>
         <Route path='/productsList' element={<ProductsListPage/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/forgetPass' element={<ForgetPassPage/>}/>
         <Route path='/resetPass/:id/:token' element={<ResetPassPage/>}/>
         <Route path='/register' element={<RegisterPage/>}/>
         <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/thankYou' element={<ThankYouPage/>}/>
         <Route path='/checkout' element={<CheckOut/>}/>
         <Route path='/user' element={
         <ProtectedRoute>
           <UserPage/>
         </ProtectedRoute>
        }/>
        <Route path='/createItem' element={<AdminProtectedRoutes><CreateItem/></AdminProtectedRoutes>}/>
        <Route path='/updateItem' element={<AdminProtectedRoutes><UpdateItem/></AdminProtectedRoutes>}/>
        <Route path='/deleteItem' element={<AdminProtectedRoutes><DeleteItem/></AdminProtectedRoutes>}/>
        
        <Route path='*' element={<NomatchPage/>}/>
       </Routes>  
       <ScrollToTop/>
       <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
       {
        pathname !== '/productsList'?<Footer/>:<div hidden></div>
       }
    </>
  );
};

export default App;
