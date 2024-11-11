import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProviderCard from './ProviderCard';
import './ProvidersList.css';

const ProvidersList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceId = searchParams.get('serviceId');

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Static provider data
    const fetchedProviders = [
      {
        id: 1,
        name: 'أمينة الخياط',
        rating: 4.8,
        reviews: 35,
        description: 'خبيرة في خدمات الخياطة والتطريز بأعلى جودة.',
        worksDone: 50,
        services: [
          { id: 1, title: 'تعديل الملابس', price: 100 },
          { id: 2, title: 'خياطة حسب الطلب', price: 200 },
        ],
      },
      {
        id: 2,
        name: 'مروة المصممة',
        rating: 4.5,
        reviews: 20,
        description: 'مصممة ملابس عصرية.',
        worksDone: 30,
        services: [
          { id: 1, title: 'تعديل الملابس', price: 120 },
        ],
      },
      // Add more providers as needed
    ];

    if (serviceId) {
      // Filter providers based on the selected serviceId
      const providersForService = fetchedProviders.filter(provider =>
        provider.services.some(service => service.id === parseInt(serviceId))
      );
      setProviders(providersForService);
    } else {
      // No serviceId provided; display all providers
      setProviders(fetchedProviders);
    }
  }, [serviceId]);

  return (
    <section className="providers-list">
      <h2>مقدمو الخدمة</h2>
      <div className="providers-grid">
        {providers.length > 0 ? (
          providers.map(provider => (
            <ProviderCard key={provider.id} provider={provider} />
          ))
        ) : (
          <p>لا توجد نتائج.</p>
        )}
      </div>
    </section>
  );
};

export default ProvidersList;
