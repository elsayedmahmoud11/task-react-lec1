import About from "./Home/About";
import Age from "./Home/Age";
import Apped from "./Home/Apped";
import Device from "./Home/Device";
import Download from "./Home/Download";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Home/Navbar";

function App(){
  return(
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Device/>
      <Age/>
      <Download/>
      <Apped/>
      <Footer/>
    </div>
  )
}
export default App;