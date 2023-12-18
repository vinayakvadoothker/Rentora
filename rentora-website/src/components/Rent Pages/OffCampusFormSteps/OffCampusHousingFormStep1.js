// OffCampusHousingFormStep1.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const OffCampusHousingFormStep1 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Add any logic you need for step 1
    // For example, validation checks or data handling

    // Navigate to the next step
    navigate('step2');
  };

  return (
    <div className="form-container">
      <h2 className="step-title">Start By Getting Pre-Qualified</h2>
      <p className="step-description">Select Your School</p>

      {/* Dropdown for selecting the school */}
      <select className="input-field">
        <option value="UC Santa Cruz">UC Santa Cruz</option>
        {/* Add more options as needed */}
      </select>

      {/* Button to navigate to the next step */}
      <button className="next-button" onClick={handleNext}>
        Start Here
      </button>
    </div>
  );
};

export default OffCampusHousingFormStep1;
