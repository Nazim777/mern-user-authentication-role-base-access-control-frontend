import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,Link } from 'react-router-dom'

const UserPasswordReset = () => {
    const {id,token} = useParams()
   // console.log(id,token)
    const [user1,setuser1] =useState({
     
        password:'',
        confirm_password:''
    })
    const handleChange=(e)=>{
      setuser1((prevstate)=>({
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
        const {data} = await axios.post(`http://localhost:5000/reset/${id}/${token}`,user1)
      window.alert(data.message)
       } catch (error) {
        console.log(error)
        
       }

       
       
    }
  
    useEffect(()=>{
       
    },[])
  
  
    



//console.log(user1)
  return (
    <div>

<form action="" className='container form' onSubmit={handleSubmit} style={{marginTop:'2vh'}}>

     
<div>
   

<div className="form-floating mb-3">
<input type="password" className="form-control" onChange={handleChange} name='password' value={user1.password} id="floatingPassword" placeholder="Password"/>
<label for="floatingPassword">Password</label>
</div>
<div className="form-floating mb-3">
<input type="password" className="form-control" onChange={handleChange} name='confirm_password' value={user1.confirm_password} id="floatingPassword" placeholder="confirm_password"/>
<label for="floatingPassword">confirm password</label>
</div>
<div className='button'>
<button type='submit'className='btn btn-primary mb-2' onClick={handleClick}>Submit</button> <br />
<Link to='/login'>Go to Login Page</Link>



</div>
  
</div>
        </form>



       
    </div>
  )
}

export default UserPasswordReset
