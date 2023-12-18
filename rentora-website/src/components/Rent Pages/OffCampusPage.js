import React from 'react';

const OffCampusHousingPage = () => {
  const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];
    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});
  }
  return (
    <div>
      <h3>Off-Campus Housing</h3>
      {/* Placeholder content for Off-Campus Housing */}
      <p>This page is dedicated to providing information about off-campus housing options.</p>
      <p>Content specific to off-campus housing will be added here.</p>
      <form onSubmit={saveAnswer}>
        <input type="text" id="answer" placeholder='Type here...'></input>
        <button>Submit to Firestore</button>
      </form>
    </div>
  );
};

export default OffCampusHousingPage;
