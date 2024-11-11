import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} منصة فتلة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
