// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingPage from './components/OnboardingPage';
import AboutPage from './components/AboutPage';
import './App.css'; // Add your styling for the background image in App.css

const App = () => {
  return (
    <div className="app-container">
      {/* Background image and styling can be managed in App.css */}
      <Router>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;