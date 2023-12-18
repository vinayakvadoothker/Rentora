// OffCampusHousingFormStep2.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const OffCampusHousingFormStep2 = () => {
  const navigate = useNavigate();


  const handleNext = () => {
    // Add any logic you need for step 2
    // For example, validation checks or data handling

    // Navigate to the next step
    navigate('step3');
  };

  return (
    <div className="form-container">
      <h2 className="step-title">Confirm Name</h2>
      <p className="step-description">Confirm This Is Your Legal Name*</p>

      {/* Input fields for first name and last name */}
      <input type="text" placeholder="First Name" className="input-field" />
      <input type="text" placeholder="Last Name" className="input-field" />

      {/* Back button to navigate to the previous step */}
      <Link to="/rent/off-campus">
        <span className="back-button">{'<-'}</span>
      </Link>

      {/* Button to navigate to the next step */}
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default OffCampusHousingFormStep2;
