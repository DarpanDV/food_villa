import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useOnline from './Utils/useOnline';
const Header = () => {
  const[loggedIn,setLoggedIn]=useState(false);
  const offline=useOnline();
  return (
    <div className="logo-img">
      <img  src='https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg' alt='No error'/>
      <ul>
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/about"> About </Link>
        </li>
        <li>
           <Link to="/contact"> Contact </Link>
        </li>
        <li>
           <Link> Cart </Link>
        </li>
        <li>
           <Link to="/instamart"> Instamart </Link>
        </li>
      </ul>
      {offline?<h1>✅</h1>:<h1>❌</h1>}
    {
    loggedIn?<button onClick={()=>{
      setLoggedIn(false)
    }}>LogIn</button>:<button onClick={()=>{
    setLoggedIn(true)}}>Logout</button>
    }
    
   

    </div>
  )
}

export default Header
