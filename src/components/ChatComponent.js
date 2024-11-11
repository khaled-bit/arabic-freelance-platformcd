import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatComponent.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

const socket = io('http://localhost:3000');

const ChatComponent = ({ contractId, userId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [deliveryType, setDeliveryType] = useState('');
  const [deliveryFrom, setDeliveryFrom] = useState('');
  const [deliveryTo, setDeliveryTo] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => socket.off('message');
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const messageData = { contractId, senderId: userId, message };
    socket.emit('sendMessage', messageData);
    setMessage('');
  };

  const handleSelectionMessage = (type, value) => {
    const messageData = {
      contractId,
      senderId: userId,
      message: `${type}: ${value}`,
    };
    socket.emit('sendMessage', messageData);
  };

  return (
    <div className="chat-container">
      <div className="page-header">
        <h1>ارسال خدمة</h1>
        <button onClick={() => setIsModalOpen(true)} className="request-service-button">
          طلب خدمة
        </button>
      </div>

      {/* Modal for Service Request Form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="service-request-modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false} // This line can be customized or removed as needed
      >
        <div className="modal-header">
          <h2>طلب خدمة</h2>
          <button onClick={() => setIsModalOpen(false)} className="close-modal-button">
            إغلاق
          </button>
        </div>
        <div className="modal-content">
          {/* Delivery Date Selection */}
          <div className="selection-group">
            <label>تحديد تاريخ التسليم:</label>
            <DatePicker
              selected={deliveryDate}
              onChange={(date) => {
                setDeliveryDate(date);
                handleSelectionMessage('تاريخ التسليم', date ? date.toLocaleDateString() : '');
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="اختر تاريخ التسليم"
              className="date-picker"
            />
          </div>

          {/* Delivery Type Selection */}
          <div className="selection-group">
            <label>نوع التسليم:</label>
            <select
              value={deliveryType}
              onChange={(e) => {
                setDeliveryType(e.target.value);
                handleSelectionMessage('نوع التسليم', e.target.value);
              }}
              className="dropdown-select"
            >
              <option value="">اختر نوع التسليم</option>
              <option value="مزود الخدمة يأتي لاستلام الطلب">مزود الخدمة يأتي لاستلام الطلب</option>
              <option value="المنصة تتولى التوصيل">المنصة تتولى التوصيل</option>
            </select>
          </div>

          {/* Delivery Location Selection */}
          <div className="selection-group">
            <label>الموقع من:</label>
            <input
              type="text"
              placeholder="حدد الموقع للبدء"
              value={deliveryFrom}
              onChange={(e) => {
                setDeliveryFrom(e.target.value);
                handleSelectionMessage('الموقع من', e.target.value);
              }}
              className="location-input"
            />
            <label>الموقع إلى:</label>
            <input
              type="text"
              placeholder="حدد الموقع للتسليم"
              value={deliveryTo}
              onChange={(e) => {
                setDeliveryTo(e.target.value);
                handleSelectionMessage('الموقع إلى', e.target.value);
              }}
              className="location-input"
            />
          </div>

          {/* Order Notes */}
          <div className="selection-group">
            <label>ملاحظات الطلب:</label>
            <textarea
              placeholder="أضف أي ملاحظات خاصة بالطلب هنا"
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              className="notes-textarea"
            />
          </div>

          <button onClick={handleSendMessage} className="submit-button">
            إرسال
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ChatComponent;
