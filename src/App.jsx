import "./App.css";
import Navbarhome from "./Component/Navbarhome";
import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Navbarmbh from "./Component/Navbarmbh";
import BMI from "./Component/BMI";

const App = () => {

  return (
    <>
      <Navbarhome  />
      <Home />
      <Aboutus />
      <Contact/>
      <Footer />
      <BMI/>
      <Navbarmbh />
    </>
  );
};

export default App;
