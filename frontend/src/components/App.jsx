import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './Admin.jsx';
import Home from './Home.jsx';
import PixelCardChoice from './PixelCardChoice.jsx';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Admin />} path="/admin" />
          <Route element={<PixelCardChoice />} path="/admin/pixelcardchoice" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
