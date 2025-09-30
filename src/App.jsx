import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Art from "./pages/Art/Art";
import Gallery from "./pages/Gallery/Gallery";
import Loader from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false, 1000));
  },[])
  return (
    <>
      <NavBar />
      {isLoading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/art' element={<Art />}/>
        <Route path='/gallery' element={<Gallery />}/>
      </Routes>
    </>
  )
}

export default App;
