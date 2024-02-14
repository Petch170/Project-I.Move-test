import "./App.css";
import Navbarhome from "./Component/Navbarhome";
import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Navbarmbh from "./Component/Navbarmbh";
import Scrolltop from "./Component/Scrolltop";



const App = () => {
  return (
    <>
      <Navbarmbh />
      <Navbarhome />
      <Home />
      <Aboutus />
      <Contact />
<Scrolltop/>
      <Footer />
    </>
  );
};

export default App;
