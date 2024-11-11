import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MultiSelect } from 'react-multi-select-component';
import './ServiceProviderCard.css';

const ServiceProviderCard = () => {
  const navigate = useNavigate();

  // Static provider data with sewing and threading services
  const provider = {
    name: 'أمينة الخياط',
    rating: 4.8,
    reviews: 35,
    description: 'خبيرة في خدمات الخياطة والتطريز بأعلى جودة.',
    services: [
      { id: 1, title: 'تصميم وتفصيل ملابس', description: 'تصميم وتفصيل ملابس حسب الطلب بأعلى جودة من الأقمشة.', price: 1500 },
      { id: 2, title: 'تعديل ملابس', description: 'تعديل وتضييق الملابس وفق المقاس المطلوب.', price: 300 },
      { id: 3, title: 'تطريز يدوي', description: 'تطريز يدوي متقن بأحدث التصاميم.', price: 1000 },
      { id: 4, title: 'تصميم الباترونات', description: 'تصميم باترونات مخصصة للملابس.', price: 800 },
    ],
  };

  // Transform services into options for the MultiSelect component
  const serviceOptions = provider.services.map((service) => ({
    label: `${service.title} - ${service.price} جنيه`,
    value: service.id,
    service,
  }));

  const [selectedServices, setSelectedServices] = useState([]);

  const handleChatInitiation = () => {
    if (selectedServices.length === 0) {
      alert('يرجى اختيار خدمة واحدة على الأقل قبل بدء الدردشة.');
      return;
    }
    const servicesToChatAbout = selectedServices.map((option) => option.service);
    navigate('/chat', { state: { provider, services: servicesToChatAbout } });
  };

  return (
    <div className="provider-card trendy">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL
          alt="Service Provider"
          className="provider-image"
        />
        <span className="badge-top-worker">🔥 عامل مميز</span>
      </div>
      <h3>{provider.name}</h3>
      <p className="rating">
        ⭐ {provider.rating} ({provider.reviews} مراجعة)
      </p>
      <p>{provider.description}</p>

      <div className="service-selection">
        <label>اختر الخدمات للتحدث عنها:</label>
        <MultiSelect
          options={serviceOptions}
          value={selectedServices}
          onChange={setSelectedServices}
          labelledBy="اختر الخدمات"
          overrideStrings={{
            selectSomeItems: 'اختر الخدمات',
            allItemsAreSelected: 'تم اختيار جميع الخدمات',
            selectAll: 'اختر الكل',
            search: 'بحث',
            clearSearch: 'مسح البحث',
          }}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            menu: (base) => ({ ...base, zIndex: 9999 }),
          }}
        />
      </div>

      <button className="btn-chat trendy-btn" onClick={handleChatInitiation}>
        دردش الآن
      </button>
    </div>
  );
};

export default ServiceProviderCard;
