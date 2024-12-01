import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <Router>
      {showWelcome ? (
        <WelcomePage onComplete={handleWelcomeComplete} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes */}
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
