import './App.css'
import Navbarhome from './Component/Navbarhome'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import { useRef } from 'react'




const App = () => {
  const ref = useRef(null);
  

  return (<>
  <Navbarhome  liref={ref}/>
  <Home/>
  <Aboutus liref={ref}/>
  <Contact liref={ref}/>
  <Footer/>
   
  </>
  
  );
};

export default App
