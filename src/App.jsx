import { useState } from 'react'
import './App.css'
import {  useNavigate } from 'react-router-dom'

function App() {

  const userDetails ={
    name:'',
    email:'',
    password:''
  }
  const [data, setdata] = useState(userDetails)
    
  const Navigate = useNavigate();
  const handleInput=(event)=>{
    const name = event.target.name
    const value = event.target.value
    setdata ({...data,[name]:value})
      console.log(data);
      
   }

   const handleSubmit =(event)=> {
    event.preventDefault();
    if(data.name=='' || data.email =='' || data.password==''){
      alert('pls enter details')
    } else{
    const getData = JSON.parse(localStorage.getItem('info')) || []; 
    let arr =[];
    arr = [...getData];
    arr.push(data)
    localStorage.setItem('info',JSON.stringify(arr))
    alert("sign up successfully");
    Navigate('/login')
    }
   }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h2 className='text-center font-bold '>Registration</h2>
      <input type='text' name='name' placeholder='Enter your  name' onChange={handleInput} />
      <input type='email' name='email' placeholder='Enter your email' onChange={handleInput} />   
      <input type='password' name='password' placeholder='Enter password' onChange={handleInput} />
      <div><button >SUBMIT</button></div>
      </div>
      </form>
    </>
  )
}

export default App
