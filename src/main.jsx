// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import  Login from './Login.jsx' 
import './login.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 
 <Routes>

  <Route path='/' element={<App/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route  path='/home' element={<Home/>}/>
  
 </Routes>
 </BrowserRouter>
)
