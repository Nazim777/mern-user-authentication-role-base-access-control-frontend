import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const LoggedUser = () => {
  const navigate = useNavigate()
    const [user,setuser] = useState()
    const token = localStorage.getItem('token')
  //  console.log(token)
    const loggedUser = async()=>{
       try {
        const {data} =await axios.get('http://localhost:5000/loggedinuuser',{
            headers:{Authorization:'Bearer ' + token}
            
        })
        setuser(data.user)
       } catch (error) {
    console.log(error)
        
       }
    }
    useEffect(()=>{
        loggedUser()

    },[])
    //console.log(user)
    const handleLogOut = ()=>{
      localStorage.removeItem('token')
      navigate('/login')
    }





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
     
     const {data} =    await axios.post('http://localhost:5000/changepassword',user1,{
          headers:{Authorization:'Bearer ' +token}
         
        })
       window.alert(data.message)
  }

  useEffect(()=>{
     
  },[])


//  console.log(user1)

  return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col-sm-4">
                {user?(
                    <div>

                        <div className="card mt-3" style={{width:'18rem'}}>

                          <div className="card-header">
                               User Profile 
                            </div>
                               <ul className="list-group list-group-flush">
                               <li className="list-group-item"> email: {user.email}</li>
                               <li className="list-group-item">name: {user.name}</li>

                             </ul>
                           </div>
                           <button className='btn btn-primary mt-3'onClick={handleLogOut}>logout</button>

                    </div>

                )
                    
               : navigate('/login')}
              
            </div>
            <div className="col-sm-8">


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
<button type='submit'className='btn btn-primary mb-2' onClick={handleClick}>Submit</button> 


</div>
  
</div>
        </form>


            </div>
        </div>
       </div>


      
    </div>
  )
}

export default LoggedUser
