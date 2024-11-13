import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesList.css';

// Placeholder images (replace with actual images later)
const placeholderImage = 'https://via.placeholder.com/150';

const services = [
  { id: 1, name: 'تعديل الملابس', description: 'تعديل وتخصيص الملابس لتناسب مقاساتك.', price: 100, image: placeholderImage },
  { id: 2, name: 'خياطة حسب الطلب', description: 'تصميم وخياطة ملابس حسب الطلب.', price: 200, image: placeholderImage },
  { id: 3, name: 'تطريز', description: 'إضافة تطريزات مخصصة للملابس.', price: 150, image: placeholderImage },
  { id: 4, name: 'تصميم باترون', description: 'تصميم باترونات مخصصة للملابس.', price: 150, image: placeholderImage },
  { id: 5, name: 'إصلاح الملابس', description: 'إصلاح التمزقات واستبدال الأزرار والسحّابات.', price: 80, image: placeholderImage },
  { id: 6, name: 'تجهيز ملابس المناسبات', description: 'تجهيز وتعديل الملابس للمناسبات الخاصة.', price: 250, image: placeholderImage },
  { id: 7, name: 'إنتاج كميات كبيرة', description: 'خدمات خياطة وإنتاج ملابس بكميات كبيرة للمصانع.', price: 5000, image: placeholderImage },
];

const ServicesList = () => {
  return (
    <section className="services-list">
      <h2>خدمات الخياطة المتاحة</h2>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
