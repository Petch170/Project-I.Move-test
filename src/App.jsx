import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import logo1 from './Picture/logo1'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import BMI from './Component/BMI'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  
    <Navbar/>
    <Home/>
    <Aboutus/>
    <Contact/>
    <Footer/>
    <BMI/>

    </>
  )
}

export default App
