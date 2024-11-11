// DeliveryTime.js
import React, { useState } from 'react';
import './DeliveryTime.css';

const DeliveryTime = ({ onTimeSelected }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    onTimeSelected(time); // Pass selected time to parent component
  };

  return (
    <div className="delivery-time-container">
      <h3>اختر وقت التسليم</h3>
      <input
        type="datetime-local"
        value={selectedTime}
        onChange={handleTimeChange}
        className="time-input"
      />
    </div>
  );
};

export default DeliveryTime;

 
