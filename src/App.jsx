import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  )
}

export default App;
