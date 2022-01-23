import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './Admin.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Admin />} path="/admin" />
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
