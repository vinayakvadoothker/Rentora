import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, useClerk } from '@clerk/clerk-react';

const Dashboard = ({ onClose }) => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      onClose(); // Close the popup after signing out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <SignedIn>
    <div>
      {/* Add your dashboard components here */}
      <button className='sign-out-button' onClick={handleSignOut}>
        <Link to="/onboarding">Sign Out</Link>
      </button>
    </div>
    </SignedIn>
  );
};

export default Dashboard;
