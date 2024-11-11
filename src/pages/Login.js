import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importing relevant icons
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Login Data Submitted:', formData);
  };

  return (
    <div className="login-container">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit" className="btn btn-primary">دخول</button>
      </form>
    </div>
  );
};

export default Login;
