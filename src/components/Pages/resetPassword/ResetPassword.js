import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

const navigate= useNavigate()
    const [user,setuser] =useState({
        email:''
       
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
            const {data} =  await axios.post('http://localhost:5000/reset',user)
          window.alert(data.message)
            
          } catch (error) {
            console.log(error)
            
          }
          

    }
    useEffect(()=>{
        
    },[])



  return (
    <div>
      
     <form action="" className='container form' onSubmit={handleSubmit} style={{marginTop:'2vh'}}>

     
<div>
   
<div className="form-floating mb-3">
<input type="email"  className="form-control" onChange={handleChange} name='email' value={user.email} id="floatingInput" placeholder="Enter your email"/>
<label for="floatingInput">Enter Your Email</label>
</div>

<div className='button'>
<button type='submit'className='btn btn-primary mb-2' onClick={handleClick}>Submit</button> 
</div>
  
</div>
</form>
    </div>
  )
}

export default ResetPassword
