// LocationSelector.js
import React, { useState } from 'react';
import './LocationSelector.css';

const LocationSelector = ({ onLocationSelected }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onLocationSelected(e.target.value);
  };

  return (
    <div className="location-selector-container">
      <h3>اختر موقع التسليم</h3>
      <input
        type="text"
        placeholder="اكتب الموقع"
        value={location}
        onChange={handleLocationChange}
        className="location-input"
      />
    </div>
  );
};

export default LocationSelector;

 