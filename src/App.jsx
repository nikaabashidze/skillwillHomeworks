import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/homepage/home'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import Tours from './pages/tours/tours'
import Services from './pages/services/services'

function App() {
  

  
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/tours" element={<Tours />} />
  </Routes>
  );
}

export default App;
