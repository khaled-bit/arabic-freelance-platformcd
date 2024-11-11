import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './whyUs.css';

const WhyUs = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="/">الرئيسية</a></li>
              <li><a href="/about">من نحن</a></li>
              <li><a href="/services">خدماتنا</a></li>
              <li><a href="/contact">تواصل معنا</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>تواصل معنا</h4>
            <p>البريد الإلكتروني: <a href="mailto:info@fatla.com">info@fatla.com</a></p>
            <p>الهاتف: <a href="tel:1234567890">123-456-7890</a></p>
            <p>العنوان: شارع المثال، مدينة المثال، مصر</p>
          </div>
          <div className="footer-section">
            <h4>تابعنا</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} منصة فتلة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default WhyUs;
