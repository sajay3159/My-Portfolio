import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/navbar/Navbar";
import Services from "./Components/Services/Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services/>
    </div>
  )
}

export default App;
