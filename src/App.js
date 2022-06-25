import React from 'react'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import LoggedUser from './components/LoggedUser/LoggedUser';
import Header from './components/Pages/Header/Header';
import ResetPassword from './components/Pages/resetPassword/ResetPassword';
import UserPasswordReset from './components/Pages/resetPassword/UserPasswordReset';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route path='/register' element={ <Register/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/' element={ <Home/>} />
        <Route path='/loggeduser' element={<LoggedUser/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/reset/:id/:token' element={<UserPasswordReset/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
     
      
    </div>
  )
}

export default App
