// components/SignupSignInPopup.js

import React from 'react';
import '../App.css';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import SignInForm from './SignInForm'; // Import SignInForm
import Dashboard from './Dashboard'; // Import Dashboard

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const SignupSignInPopup = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose(); // Call the onClose function to close the popup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" style={popupStyles}>
        <button className="close-button" onClick={handleCloseClick}>
          X
        </button>
        <ClerkProvider publishableKey={clerkPubKey}>
          <div className="clerk-signin-container">
            <SignedOut>
              <SignInForm />
            </SignedOut>
            <SignedIn>
              <Dashboard onClose={onClose} />
            </SignedIn>
          </div>a
        </ClerkProvider>
      </div>
    </div>
  );
};

const popupStyles = {
  position: 'absolute',
  top: '50%', // Adjust as needed
  left: '50%', // Adjust as needed
  transform: 'translate(-50%, -50%)', // Center the popup
  width: '100%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.4)', // Partially transparent blue background
  overflow: 'hidden', // Hide overflowing content outside the border-radius
};

export default SignupSignInPopup;
