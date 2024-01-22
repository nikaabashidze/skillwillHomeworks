import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/homepage/home'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import Tours from './pages/homework/homework'
import Services from './pages/services/services'
import Homework11 from './layout/skillwillHomework11/skillwill'
import Homework12 from './layout/skillwillHomework12/homework12'

function App() {
  

  
  return (
    <Routes>
    <Route path="/skillwillHomeworks/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/homework" element={<Tours />} />
    <Route path="/skillwillHomework11" element={<Homework11 />} />
    <Route path="/skillwillHomework12" element={<Homework12 />} />
    </Routes>
  );
}

export default App;
