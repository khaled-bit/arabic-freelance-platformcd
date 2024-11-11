import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProviderCard.css';

const ProviderCard = ({ provider, fullWidth = false, fullHeight = false, customized = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [photo, setPhoto] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <div className={`provider-card ${fullWidth ? 'full-width-card' : ''} ${fullHeight ? 'full-height-card' : ''} ${customized ? 'customized-card' : ''}`}>
      <div className="image-container">
        <img
          src={provider.photo || 'https://via.placeholder.com/150'}
          alt={`صورة ${provider.name}`}
          className={`provider-photo ${customized ? 'customized-photo' : ''}`}
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{provider.name}</h3>
          <span className="provider-rating">⭐ {provider.rating} ({provider.reviews} مراجعات)</span>
        </div>
        <p className="provider-description">{provider.description}</p>
        <p>عدد الأعمال المنجزة: {provider.worksDone}</p>
        <p className="provider-location">الموقع: {provider.location.city} {provider.location.area && `- ${provider.location.area}`}</p>
        <div className={`provider-services ${customized ? 'customized-services' : ''}`}>
          <h4>الخدمات:</h4>
          <ul>
            {provider.services.map((service) => (
              <li key={service.id}>{service.title} - {service.price} جنيه</li>
            ))}
          </ul>
        </div>
        <div className="provider-actions">
          <a href={`/provider/${provider.id}`} className="view-profile-button">
            عرض الملف الشخصي
          </a>
          <button onClick={openModal} className="chat-button">
            طلب خدمة
          </button>
        </div>
      </div>

      {/* Modal for Service Request */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="طلب الخدمة"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>طلب الخدمة - {provider.name}</h2>
        <div className="form-section">
          <div className="selection-group">
            <label>نوع الخدمة:</label>
            <select
              value={selectedServiceType}
              onChange={(e) => setSelectedServiceType(e.target.value)}
              className="dropdown-select"
            >
              <option value="">اختر نوع الخدمة</option>
              {provider.services.map((service) => (
                <option key={service.id} value={service.title}>{service.title}</option>
              ))}
            </select>
          </div>
          <div className="selection-group">
            <label>عدد العناصر:</label>
            <input
              type="number"
              min="1"
              value={numberOfItems}
              onChange={(e) => setNumberOfItems(e.target.value)}
              className="number-input"
              placeholder="حدد عدد العناصر"
            />
          </div>
          <div className="selection-group">
            <label>صورة العيب (إذا وجدت):</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="file-input"
            />
            {photo && <p>تم اختيار الصورة: {photo.name}</p>}
          </div>
          <div className="selection-group">
            <label>نوع التسليم:</label>
            <select className="dropdown-select">
              <option value="">اختر نوع التسليم</option>
              <option value="مزود الخدمة يأتي لاستلام الطلب">مزود الخدمة يأتي لاستلام الطلب</option>
              <option value="المنصة تتولى التوصيل">المنصة تتولى التوصيل</option>
            </select>
          </div>
          <div className="selection-group">
            <label>موقع استلام الطلب</label>
            <input
              type="text"
              placeholder="حدد الموقع الذي يجب استلام الطلب منه"
              className="location-input"
            />
          </div>
          <div className="selection-group">
            <label>طريقة الدفع</label>
            <select className="dropdown-select">
              <option value="">اختر طريقة الدفع</option>
              <option value="الدفع عند الاستلام">الدفع عند الاستلام</option>
              <option value="بطاقة ائتمان/خصم">بطاقة ائتمان/خصم</option>
              <option value="خدمة محفظة فودافون كاش">خدمة محفظة فودافون كاش</option>
            </select>
          </div>
          <div className="selection-group">
            <label>ملاحظات الطلب:</label>
            <textarea
              placeholder="أضف أي ملاحظات خاصة بالطلب هنا"
              className="notes-textarea"
            />
          </div>
          <div className="modal-actions">
            <button onClick={closeModal} className="submit-button">إرسال</button>
            <button onClick={closeModal} className="cancel-button">إلغاء</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProviderCard;
