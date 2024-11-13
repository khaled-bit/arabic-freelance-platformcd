import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are applied
import Modal from 'react-modal'; // Ensure you have react-modal installed
import './ServiceProviderCard.css';

Modal.setAppElement('#root'); // Set app root for accessibility

const ServiceProviderCard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [photo, setPhoto] = useState(null);

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

  const handleChatInitiation = () => {
    setIsModalOpen(true); // Open the modal when this button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when called
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
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
        <label>عرض الخدمات والأسعار</label>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
             الخدمات
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {provider.services.map((service) => (
              <Dropdown.Item key={service.id} eventKey={service.id}>
                {service.title} - {service.price} جنيه
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <button className="btn-chat trendy-btn" onClick={handleChatInitiation}>
        طلب خدمة
      </button>

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

export default ServiceProviderCard;
