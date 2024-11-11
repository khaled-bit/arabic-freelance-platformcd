import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
import ProviderCard from './ProviderCard';
import './ProvidersList.css';
import './ChatComponent.css';
import WhyUs from './WhyUs';

Modal.setAppElement('#root');

const ProvidersList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceId = searchParams.get('serviceId');

  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [filters, setFilters] = useState({
    minRating: 0,
    minPrice: 0,
    maxPrice: 1000,
    location: '',
  });
  const [showFilters, setShowFilters] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const [deliveryType, setDeliveryType] = useState('');
  const [deliveryFrom, setDeliveryFrom] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  useEffect(() => {
    const fetchedProviders = [
      {
        id: 1,
        name: 'الفخراني',
        rating: 4.8,
        reviews: 35,
        description: 'خبيرة في خدمات الخياطة والتطريز بأعلى جودة.',
        worksDone: 50,
        location: { city: 'الإسكندرية', area: 'العطارين' },
        services: [
          { id: 1, title: 'تعديل الملابس', price: 100 },
          { id: 2, title: 'خياطة حسب الطلب', price: 200 },
        ],
        photo: 'https://via.placeholder.com/150/ffecd2', // Sample image URL
      },
      {
        id: 2,
        name: 'إبرة وخيط',
        rating: 4.5,
        reviews: 20,
        description: 'متخصصون في خدمات الخياطة والتفصيل بجودة عالية.',
        worksDone: 45,
        location: { city: 'القاهرة', area: '' },
        services: [
          { id: 1, title: 'تعديل الملابس', price: 150 },
          { id: 2, title: 'خياطة حسب الطلب', price: 250 },
        ],
        photo: 'https://via.placeholder.com/150/ffe4e1', // Sample image URL
      },
      {
        id: 3,
        name: 'أتيليه الأميرة',
        rating: 4.7,
        reviews: 30,
        description: 'أتيليه متخصص في تصميم وتفصيل فساتين السهرة والزفاف.',
        worksDone: 60,
        location: { city: 'القاهرة', area: '' },
        services: [
          { id: 1, title: 'تصميم فساتين السهرة', price: 1000 },
          { id: 2, title: 'تفصيل فساتين الزفاف', price: 1500 },
        ],
        photo: 'https://via.placeholder.com/150/fdf4f4', // Sample image URL
      },
      {
        id: 4,
        name: 'أتيليه العروسة',
        rating: 4.6,
        reviews: 25,
        description: 'متخصصون في تفصيل فساتين الزفاف والسهرة بأحدث التصاميم.',
        worksDone: 55,
        location: { city: 'الإسكندرية', area: '' },
        services: [
          { id: 1, title: 'تفصيل فساتين الزفاف', price: 1200 },
          { id: 2, title: 'تعديل فساتين السهرة', price: 800 },
        ],
        photo: 'https://via.placeholder.com/150/ffddc1', // Sample image URL
      },
      {
        id: 5,
        name: 'أتيليه بوسي',
        rating: 4.4,
        reviews: 18,
        description: 'يقدم خدمات الخياطة والتفصيل لجميع أنواع الملابس.',
        worksDone: 40,
        location: { city: 'الإسكندرية', area: '' },
        services: [
          { id: 1, title: 'خياطة ملابس حريمي', price: 200 },
          { id: 2, title: 'تفصيل ملابس أطفال', price: 150 },
        ],
        photo: 'https://via.placeholder.com/150/ffe4c4', // Sample image URL
      },
      {
        id: 6,
        name: 'أتيليه النجم الساطع',
        rating: 4.5,
        reviews: 22,
        description: 'متخصص في خدمات التطريز والخياطة بجودة عالية.',
        worksDone: 50,
        location: { city: 'الإسكندرية', area: '' },
        services: [
          { id: 1, title: 'تطريز ملابس', price: 300 },
          { id: 2, title: 'خياطة حسب الطلب', price: 400 },
        ],
        photo: 'https://via.placeholder.com/150/fdebd3', // Sample image URL
      },
      {
        id: 7,
        name: 'أتيليه إيفا',
        rating: 4.6,
        reviews: 28,
        description: 'يقدم خدمات تصميم وتفصيل الملابس بأحدث الموديلات.',
        worksDone: 65,
        location: { city: 'الإسكندرية', area: '' },
        services: [
          { id: 1, title: 'تصميم ملابس كاجوال', price: 500 },
          { id: 2, title: 'تفصيل ملابس رسمية', price: 700 },
        ],
        photo: 'https://via.placeholder.com/150/ffccbc', // Sample image URL
      },
    ];
    
    let providersToDisplay = fetchedProviders;

    if (serviceId) {
      providersToDisplay = providersToDisplay.filter(provider =>
        provider.services.some(service => service.id === parseInt(serviceId))
      );
    }

    setProviders(providersToDisplay);
    setFilteredProviders(providersToDisplay);
  }, [serviceId]);

  const applyFilters = () => {
    const { minRating, minPrice, maxPrice, location } = filters;
    const filtered = providers.filter(provider =>
      provider.rating >= minRating &&
      provider.services.some(service => service.price >= minPrice && service.price <= maxPrice) &&
      (location ? provider.location.city.includes(location) : true)
    );
    setFilteredProviders(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const resetFilters = () => {
    setFilters({ minRating: 0, minPrice: 0, maxPrice: 1000, location: '' });
    setFilteredProviders(providers);
  };

  const openModal = (provider) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProvider(null);
  };

  const handleServiceRequestSubmit = () => {
    console.log('Service Requested:', { selectedProvider, deliveryType, deliveryFrom, orderNotes });
    closeModal();
  };

  return (
    <section className="providers-list">
      <h2>مقدمو الخدمة</h2>
      <button className="toggle-filters-btn" onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? 'إخفاء الفلاتر' : 'عرض الفلاتر'}
      </button>
      {showFilters && (
        <div className="filter-controls">
          <div className="filter-group">
            <label>الحد الأدنى للتقييم:</label>
            <input
              type="number"
              name="minRating"
              value={filters.minRating}
              onChange={handleFilterChange}
              min="0"
              max="5"
              step="1"
            />
          </div>
          <div className="filter-group">
            <label>الحد الأدنى للسعر:</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              min="0"
            />
          </div>
          <div className="filter-group">
            <label>الحد الأقصى للسعر:</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
          <div className="filter-group">
            <label>الموقع:</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            >
              <option value="">اختر المدينة</option>
              <option value="القاهرة">القاهرة</option>
              <option value="الإسكندرية">الإسكندرية</option>
              <option value="الجيزة">الجيزة</option>
              <option value="المنصورة">المنصورة</option>
              <option value="الأقصر">الأقصر</option>
            </select>
          </div>
          <div className="filter-actions">
            <button className="btn-filter-apply" onClick={applyFilters}>تطبيق الفلاتر</button>
            <button className="btn-reset-filters" onClick={resetFilters}>إعادة تعيين</button>
          </div>
        </div>
      )}
      <div className="providers-grid">
        {filteredProviders.length > 0 ? (
          filteredProviders.map(provider => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              fullWidth={false}
              fullHeight={false}
              onRequestServiceClick={() => openModal(provider)}
            />
          ))
        ) : (
          <p>لا توجد نتائج.</p>
        )}
      </div>
      <WhyUs />

      {/* Modal for Service Request */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="طلب الخدمة"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>طلب الخدمة {selectedProvider ? `- ${selectedProvider.name}` : ''}</h2>
        <div className="form-section">
          <div className="selection-group">
            <label>نوع التسليم:</label>
            <select
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
              className="dropdown-select"
            >
              <option value="">اختر نوع التسليم</option>
              <option value="مزود الخدمة يأتي لاستلام الطلب">مزود الخدمة يأتي لاستلام الطلب</option>
              <option value="المنصة تتولى التوصيل">المنصة تتولى التوصيل</option>
            </select>
          </div>
          <div className="selection-group">
            <label>الموقع من:</label>
            <input
              type="text"
              placeholder="حدد الموقع للبدء"
              value={deliveryFrom}
              onChange={(e) => setDeliveryFrom(e.target.value)}
              className="location-input"
            />
          </div>
          <div className="selection-group">
            <label>ملاحظات الطلب:</label>
            <textarea
              placeholder="أضف أي ملاحظات خاصة بالطلب هنا"
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              className="notes-textarea"
            />
          </div>
          <div className="modal-actions">
            <button onClick={handleServiceRequestSubmit} className="submit-button">إرسال</button>
            <button onClick={closeModal} className="cancel-button">إلغاء</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ProvidersList;
