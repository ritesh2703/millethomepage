import React, { useState } from 'react';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import DietPlan from './pages/DietPlan';
import MilletMarket from './pages/MilletMarket';
import RecipePage from './pages/RecipePage';
import AddRecipe from './pages/AddRecipe';
import ViewRecipe from './pages/ViewRecipe';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/signin" element={<User />} />
          <Route path="/signup" element={<User />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/millet-market" element={<MilletMarket />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/view-recipe/:id" element={<ViewRecipe />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
