import React, { useState } from 'react'

const Header = () => {
  const[loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="logo-img">
      <img  src='https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg' alt='No error'/>
      <ul>
        <li>
            Home
        </li>
        <li>
            About
        </li>
        <li>
            Contact
        </li>
        <li>
            Cart
        </li>
      </ul>
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
