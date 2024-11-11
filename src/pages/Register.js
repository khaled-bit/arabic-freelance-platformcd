import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="register-container">
      <h2>تسجيل حساب جديد</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">الاسم</label>
          <div className="input-container">
            <FaUser className="input-icon" />
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="أدخل اسمك"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني</label>
          <div className="input-container">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">كلمة المرور</label>
          <div className="input-container">
            <FaLock className="input-icon" />
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="أدخل كلمة المرور"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">تسجيل</button>
      </form>
    </div>
  );
};

export default Register;
