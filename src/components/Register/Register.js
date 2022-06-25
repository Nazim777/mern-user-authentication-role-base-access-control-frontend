import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [user,setuser] =useState({
        name:'',
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
        if(user.name && user.email && user.password){
          axios.post(`http://localhost:5000/register`,user).then((res)=>{
            if(res.data.message==='registered successfully!'){
              window.alert('registered successfully!')
              navigate('/login')

            } else{
              window.alert('user already exist')
            }
          })
         

        }else{
          window.alert('all fields required')
        }


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
  <input type="text"  className="form-control" onChange={handleChange} id="floatingInput" name='name'value={user.name} placeholder="Enter your name"/>
  <label for="floatingInput">Name</label>
</div>

<div className="form-floating mb-3">
  <input type="email"  className="form-control" onChange={handleChange} name='email' value={user.email} id="floatingInput" placeholder="Enter your email"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control" onChange={handleChange} name='password' value={user.password} id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div className='button'>
    <button type='submit'className='btn btn-primary mb-2' onClick={handleClick}>Register</button> <br />  already registered? <br /> 
    <button type='submit'className='btn btn-primary mt-2' onClick={()=>navigate('/login')}>Login</button>


</div>
      
    </div>
    </form>
  )
}

export default Register
