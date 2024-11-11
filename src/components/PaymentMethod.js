// PaymentMethod.js
import React, { useState } from 'react';
import './PaymentMethod.css';

const PaymentMethod = ({ onPaymentMethodSelected }) => {
  const paymentMethods = ['Vodafone Cash', 'Fawry', 'Etisalat Cash', 'Orange', 'MasterCard', 'Visa'];
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
    onPaymentMethodSelected(method);
  };

  return (
    <div className="payment-method-container">
      <h3>اختر طريقة الدفع</h3>
      <ul className="payment-method-list">
        {paymentMethods.map((method) => (
          <li
            key={method}
            className={`payment-method-item ${selectedMethod === method ? 'selected' : ''}`}
            onClick={() => handleMethodChange(method)}
          >
            {method}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethod;

 
