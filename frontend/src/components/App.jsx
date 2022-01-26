import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './Admin.jsx';
import Home from './Home.jsx';
import PixelCardChoice from './PixelCardChoice.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Admin />} path="/admin" />
          <Route element={<PixelCardChoice />} path="/admin/pixelcardchoice" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
