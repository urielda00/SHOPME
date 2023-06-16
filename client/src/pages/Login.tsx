import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import React, {useState} from 'react';




 const LoginPage= ()=>{
  const [userName, setUsername]= useState('');
  const [password, setPassword]= useState('');
  


  const handleSubmit= async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    try {
      const res= await axios.post('http://localhost:5000/auth/login',
      {
        userName:userName,
        password:password
      });
      
      
      window.sessionStorage.setItem('isLoggedIn','true');
      window.sessionStorage.setItem('userNameHere',userName);
      setTimeout(()=>{
        window.location.replace('/profile')
      },1000)
    } catch (error:any) {
      console.log('error occured in the login request');
    }
    }

    const navigate = useNavigate();
    
  return(
   
  
   <div >
      <div > 
        <h1 >Hello Again!</h1>
        <p >Welcome back you've been missed!</p>



        <form onSubmit={handleSubmit}>
        
         
          <input  onChange={(e)=>setUsername(e.target.value)} name='userName' type="text" placeholder="Enter username"/>
          <input  onChange={(e)=>setPassword(e.target.value)} id="password"  name='password' type="password" placeholder="Password"/> 
          <p >
          <Link to="/recoverPass">Recover Password</Link>
          </p>
          <button className='hover-btn' >Sign in</button>
          </form>         
         <p >
         ----- or continue with -----
         </p>
         <div >
                   
              
         </div>
         <div >
           Not a member? <Link to="/register">Register Now</Link>
         </div>
  </div>
 

    </div>
  )
 };

 export default LoginPage;
