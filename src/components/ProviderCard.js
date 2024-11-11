import React from 'react';
import { Link } from 'react-router-dom';
import './ProviderCard.css';

const ProviderCard = ({ provider }) => {
  return (
    <div className="provider-card">
      <img
        src={provider.photo || 'https://via.placeholder.com/150'}
        alt={`صورة ${provider.name}`}
        className="provider-photo"
      />
      <h3>{provider.name}</h3>
      <p className="provider-description">{provider.description}</p>
      <div className="provider-rating">
        <span>⭐ {provider.rating}</span>
        <span>({provider.reviews} مراجعات)</span>
      </div>
      <p>عدد الأعمال المنجزة: {provider.worksDone}</p>
      <div className="provider-services">
        <h4>الخدمات:</h4>
        <ul>
          {provider.services.map((service) => (
            <li key={service.id}>{service.title}</li>
          ))}
        </ul>
      </div>
      <Link to={`/provider/${provider.id}`} className="view-profile-button">
        عرض الملف الشخصي
      </Link>
    </div>
  );
};

export default ProviderCard;
