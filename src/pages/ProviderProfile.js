import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProviderContext } from '../context/ProviderContext';
import './ProviderProfile.css';

const ProviderProfile = () => {
  const { id } = useParams();
  const { providers } = useContext(ProviderContext);

  if (!providers || providers.length === 0) {
    return <p className="loading">جاري تحميل البيانات...</p>;
  }

  const provider = providers.find((p) => p.id === parseInt(id));

  if (!provider) {
    return <p className="not-found">المزود غير موجود.</p>;
  }

  return (
    <div className="provider-profile">
      <div className="profile-header">
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
      </div>

      <div className="services-offered">
        <h2>الخدمات المقدمة:</h2>
        <ul>
          {provider.services.map((service) => (
            <li key={service.id}>
              <div className="service-title">{service.title}</div>
              <div className="service-description">{service.description}</div>
              <div className="service-price">{service.price} جنيه</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="reviews-section">
        <h2>التقييمات والتعليقات:</h2>
        <div className="review">
          <div className="review-header">
            <img
              src="https://via.placeholder.com/50"
              alt="مستخدم"
              className="reviewer-photo"
            />
            <div className="reviewer-info">
              <span className="reviewer-name">محمد أحمد</span>
              <span className="review-date">10 نوفمبر 2024</span>
            </div>
            <div className="review-rating">⭐⭐⭐⭐⭐</div>
          </div>
          <p className="review-text">
            خدمة ممتازة وجودة عالية في العمل. أنصح بالتعامل معها.
          </p>
        </div>
        {/* Add more static reviews as needed */}
      </div>
    </div>
  );
};

export default ProviderProfile;
