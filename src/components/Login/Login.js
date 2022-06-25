import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './Login.css'
import { useNavigate,Link } from 'react-router-dom'
const Login = () => {

    const [user,setuser] =useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{
      setuser((prevstate)=>({
          ...prevstate,
          [e.target.name]:e.target.value
      }))

    }
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    //console.log(user)
    const handleClick=async()=>{
       
           try {
            await axios.post("http://localhost:5000/login",user).then((res)=>{
                console.log(res.data)
               alert(res.data.message)
               if(res.data.message==='login successfully'){
                localStorage.setItem('token',res.data.token)
                navigate('/loggeduser')
                  // setTimeout(() => {
                  //  
                  // }, 2000);

               }
            })
           } catch (error) {
               console.log(error)
               
           }

       

    }
    useEffect(()=>{
        
    },[])
    const navigate= useNavigate()
  return (
      <form action="" className='container form' onSubmit={handleSubmit} style={{marginTop:'2vh'}}>

     
    <div>
       
<div className="form-floating mb-3">
  <input type="email"  className="form-control" onChange={handleChange} name='email' value={user.email} id="floatingInput" placeholder="Enter your email"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control" onChange={handleChange} name='password' value={user.password} id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div className='button'>
    <button type='submit'className='btn btn-primary mb-2' onClick={handleClick}>Login</button> <br />  not logged in? <br /> 
    <button type='submit'className='btn btn-primary mt-2' onClick={()=>navigate('/register')}>Register</button> <br />
   <Link to='/resetpassword'>Reset password...</Link>


</div>
      
    </div>
    </form>
  )
}

export default Login
