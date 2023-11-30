// components/OnboardingPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupSignInPopup from './SignUpSignInPopup';
import '../App.css';

const OnboardingPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleGetStartedClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <header>
        <h1 className="header-title">Rentora</h1>
      </header>
      <Link to="#" className="get-started-btn" onClick={handleGetStartedClick}>
        Get Started
      </Link>
      {isPopupOpen && <SignupSignInPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default OnboardingPage;