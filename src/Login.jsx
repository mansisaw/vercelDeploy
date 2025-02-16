import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setmsg] = useState('')
    const Navigate = useNavigate()
    const handlemail =(event)=>{
        const name = event.target.name
        const value = event.target.value
        if('email'== name){
            setEmail(value)
        }
        if('password'== name){
            setPassword(value)
        }
    }

    const handleSubmit =(event)=>{ 
        event.preventDefault();
        if (email == ''||password == ''){
            alert('please enter details')
        }else{
       let getDetails = JSON.parse(localStorage.getItem('info'))
        getDetails.map((currentvalue) =>{
            let storeEmail = currentvalue.email
            let storepassword = currentvalue.password
            if (storeEmail == email && storepassword==password){
                setmsg('') 
                Navigate('/home')
            } else{
               setmsg ("Invalid email or password")
            }

        })   
    }
    }

  return (
    <div>
        <p>{msg}</p>
         <form onSubmit={handleSubmit}>
        <div className="loginForm">
        <h2 className='text-center font-bold '>Login</h2>
      <input type='email' name='email' placeholder='enter u r email' onChange={handlemail} />   
      <input type='password' name='password' placeholder='enter u r password' onChange={handlemail} />
      <div><button >SUBMIT</button></div>
      </div>
      </form>
    </div>
  )
}

export default Login;
