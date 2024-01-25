import './App.css'
import Navbarhome from './Component/Navbarhome'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import BMI from './Component/BMI'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const App = () => {
  const scrollToContact = () => {
    scroll.scrollTo("contactSection", {
      smooth: true,
      offset: -70,
    });
  };
  return (<>
  {/* <Navbarhome/>
  <Home/>
  <Aboutus/>
  <Contact/>
  <Footer/> */}
    <Router>
      <div>
        <Navbarhome />
        <Routes>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
        <Footer />
      </div>
      <ScrollLink
        to="contactSection"
        smooth={true}
        offset={-70}
        duration={500}
        className="contact-link"
        onClick={scrollToContact}
      >
        Contact
      </ScrollLink>
    </Router>
  </>
  
  );
};

export default App
