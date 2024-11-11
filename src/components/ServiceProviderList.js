import React from 'react';
import ServiceProviderCard from './ServiceProviderCard';
import './ServiceProviderList.css';

const providers = [
  { id: 1, name: 'أمينة الخياط', rating: 4.5, reviews: 120, description: 'متخصصة في تعديل الملابس النسائية.' },
  { id: 2, name: 'سامي الحرفي', rating: 4.8, reviews: 98, description: 'خبير في خياطة البدلات الرجالية.' },
  { id: 3, name: 'ليلى التطريز', rating: 4.7, reviews: 150, description: 'فنانة في إضافة التطريزات المميزة.' },
  // Add more providers as needed
];

const ServiceProviderList = () => {
  return (
    <section className="provider-list">
      <h2>مزودو خدمات الخياطة</h2>
      <div className="provider-grid">
        {providers.map(provider => (
          <ServiceProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
};

export default ServiceProviderList;
