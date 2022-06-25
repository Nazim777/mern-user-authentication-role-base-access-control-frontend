import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const token = localStorage.getItem('token')
  
   const [userToken,setUserToken] =useState()
   useEffect(()=>{
    setUserToken(token)

   },[token])
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    
    <Link to='/' className='navbar-brand'>Nazim</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {userToken?<>

            <li className="nav-item">
        
        <Link to='/' className='nav-link'>Home</Link>
        </li>

        <li className="nav-item">
         
            <Link to='/loggeduser' className='nav-link'>Dashboard</Link>
          </li>
        
        
        </>:<>

        <li className="nav-item">
         
         <Link to='/register' className='nav-link'>Register</Link>
         </li>
         <li className="nav-item">
         
         <Link to='/login' className='nav-link'>Login</Link>
         </li>
           
        
        
        </>}
      
       
  
       
       
      </ul>
     
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Header
