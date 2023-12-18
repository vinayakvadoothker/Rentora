// OffCampusPage.js
import React, { useState, useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import OffCampusHousingFormStep1 from './OffCampusFormSteps/OffCampusHousingFormStep1';
import OffCampusHousingFormStep2 from './OffCampusFormSteps/OffCampusHousingFormStep2';
import OffCampusHousingFormStep3 from './OffCampusFormSteps/OffCampusHousingFormStep3';

const OffCampusPage = () => {
  const [isFormCompleted, setFormCompleted] = useState(false);
  const { session } = useClerk();

  useEffect(() => {
    // You can implement additional logic here if needed
  }, []);

  // Function to mark the form as completed
  const completeForm = () => {
    // You can implement the logic to mark the form as completed in your application
    setFormCompleted(true);
  };

  // If the user hasn't completed the form, show the form completion popup
  if (!isFormCompleted) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<OffCampusHousingFormStep1 onComplete={completeForm} />} />
          <Route path="step2" element={<OffCampusHousingFormStep2 onComplete={completeForm} />} />
          <Route path="step2/step3" element={<OffCampusHousingFormStep3 onComplete={completeForm} />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      {/* Render the houses or other content for users who have completed the form */}
      <h2>Off-Campus Housing Listings</h2>
      {/* Add your logic to display the houses or other content */}
    </div>
  );
};

export default OffCampusPage;
