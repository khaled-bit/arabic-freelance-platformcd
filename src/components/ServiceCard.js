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
      <img src={service.image} alt={service.name} className="service-image" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      {/* <p className="price">السعر: {service.price} جنيه</p> */}
      <button className="btn-view-providers" onClick={handleViewProviders}>
        عرض مقدمي الخدمة
      </button>
    </div>
  );
};

export default ServiceCard;
