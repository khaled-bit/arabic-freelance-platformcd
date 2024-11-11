import React from 'react';
import { useParams } from 'react-router-dom';
import './ProviderProfile.css';

const ProviderProfile = ({ providers }) => {
  const { id } = useParams();
  const provider = providers.find((p) => p.id === parseInt(id));

  if (!provider) {
    return <p>المزود غير موجود.</p>;
  }

  return (
    <div className="provider-profile">
      <img
        src={provider.photo || 'https://via.placeholder.com/150'}
        alt={`صورة ${provider.name}`}
        className="profile-photo"
      />
      <h1>{provider.name}</h1>
      <p className="description">{provider.description}</p>
      <div className="rating-reviews">
        <span className="rating">⭐ {provider.rating}</span>
        <span className="reviews">({provider.reviews} مراجعة)</span>
      </div>
      <div className="services-offered">
        <h2>الخدمات المقدمة:</h2>
        <ul>
          {provider.services.map((service) => (
            <li key={service.id}>
              {service.title} - {service.price} جنيه
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-info">
        <h2>معلومات الاتصال:</h2>
        <p>الهاتف: {provider.phone}</p>
        <p>البريد الإلكتروني: {provider.email}</p>
      </div>
    </div>
  );
};

export default ProviderProfile;
