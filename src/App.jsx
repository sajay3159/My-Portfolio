import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import MyWork from "./Components/My -Work/MyWork";
import Navbar from "./Components/navbar/Navbar";
import Services from "./Components/Services/Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <MyWork />
    </div>
  )
}

export default App;
