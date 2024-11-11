import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleViewProviders = () => {
    navigate(`/providers?serviceId=${service.id}`);
  };

  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button className="btn-view-providers" onClick={handleViewProviders}>
        عرض مقدمي الخدمة
      </button>
    </div>
  );
};

export default ServiceCard;
