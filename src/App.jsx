import React from 'react'
import Navbar from './components/Navbar'
import {useLocation, Route, Routes } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
const App = () => {
  const location = useLocation();
  return (
    <div className='m-4'>
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
