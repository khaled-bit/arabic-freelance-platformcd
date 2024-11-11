import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="content">
        <h1>مرحبا بكم في منصة فتلة</h1>
        <p>ابدأ بالعمل الآن!</p>
        <Link to="/register" className="btn-primary">انضم الآن</Link>
      </div>
      <div className="image-container">
        <img src="/images/sewing-thread.svg" alt="Sewing Thread" />
      </div>
    </div>
  );
};

export default WelcomeSection;
