import React from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed
import Home from './pages/Home'; // Adjust path as needed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
