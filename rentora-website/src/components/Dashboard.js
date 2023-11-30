import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ onClose }) => {
  const handleSignOut = () => {
    // Add sign-out logic here
    onClose(); // Close the popup after signing out
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Add your dashboard components here */}
      <Link to="/onboarding">Go to Onboarding</Link>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
