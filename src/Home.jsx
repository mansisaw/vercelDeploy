import React from 'react'
import { useNavigate } from 'react-router-dom'


 const Home = () => {
    const Navigate = useNavigate();
    const logout =()=>{
        localStorage.removeItem("info")
        Navigate("/")
        
    }

  return (
    <div>
      <h2 className='text-3xl text-left'>welcome to the home page!!!</h2>
      <button onClick={logout} >logout</button>
    </div>
  )
}

export default Home

