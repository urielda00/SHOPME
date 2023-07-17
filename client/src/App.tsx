//External imports
import './style.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react';

//Reuseable components imports:
import NavBar from './components/NavBar';
import ContactNavbar from './components/ContactNavbar';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoutes';
// import Footer from './components/Footer';



//Pages imports:
import NomatchPage from './pages/NomatchPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SingleItemPage from './pages/SingleItemPage';
import ProductsListPage  from './pages/ProductsListPage';
import UserPage from './pages/UserPage';
import { Create } from './pages/Create';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassPage from './pages/ForgetPassPage';
import ResetPassPage from './pages/ResetPassPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import Footer from './components/Footer';
// type Status = boolean;
// let status: Status = true

const App = () => {
  const { pathname } = useLocation();
  return (
     <>
       <ContactNavbar/>
       <NavBar/>
    
       <Routes>
         {
           // here we need to create the ternary operator for protected routes.. check is done by the    variable status.
         }
         <Route path='/' element={<HomePage/>}/> 
         <Route path='/product/:productId' element={<SingleItemPage/>}/>
         <Route path='/cart' element={<CartPage/>}/>
         <Route path='/productsList' element={<ProductsListPage/>}/>
         <Route path='/create' element={<Create/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/forgetPass' element={<ForgetPassPage/>}/>
         <Route path='/resetPass/:id/:token' element={<ResetPassPage/>}/>
         <Route path='/register' element={<RegisterPage/>}/>
         <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/thankYou' element={<ThankYouPage/>}/>
         <Route path='/user' element={
         <ProtectedRoute>
           <UserPage/>
         </ProtectedRoute>
        }/>
        <Route path='*' element={<NomatchPage/>}/>
       </Routes>  
    
       <ScrollToTop/>
       <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
       {
        pathname !== '/productsList'?<Footer/>:<div hidden></div>
       }
    </>
  );
}

export default App;
