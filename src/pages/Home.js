import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import ServiceList from '../components/ServicesList';
import ServiceProviderList from '../components/ServiceProviderList';
import WhyUs from '../components/WhyUs';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import './Home.css'; // Import CSS for styling enhancements

const Home = () => {
  return (
    <div className="home-container">
      <WelcomeSection />
      <div className="section-divider"></div> {/* Decorative divider */}
      <ServiceList />
      <div className="section-divider"></div> {/* Decorative divider */}
      <ServiceProviderList />
      <div className="section-divider"></div> {/* Decorative divider */}
      <Testimonials />
      <div className="section-divider"></div> {/* Decorative divider */}
      <FAQ />
      <div className="section-divider"></div> {/* Decorative divider */}
      <WhyUs />
    </div>
  );
};

export default Home;
