// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProvidersList from './components/ProvidersList';
import ProviderProfile from './pages/ProviderProfile';
import ServiceProviderDashboard from './pages/ServiceProviderDashboard';
import ChatComponent from './components/ChatComponent';
import ProviderContextProvider from './context/ProviderContext';
import './App.css';
import '@fontsource/aref-ruqaa';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (isOpen) => {
    if (typeof isOpen === 'boolean') {
      setIsMenuOpen(isOpen);
    }
  };
  

  return (
    <ProviderContextProvider>
      <Router>
        <Header toggleMenu={() => toggleMenu(!isMenuOpen)} />
        <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
          path="/dashboard"
          element={
            // Optionally wrap this with a ProtectedRoute to ensure only logged-in users see it
            <ServiceProviderDashboard />
          }
        />
            <Route path="/chat" element={<ChatComponent />} />
            <Route path="/providers" element={<ProvidersList />} />
            <Route path="/provider/:id" element={<ProviderProfile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </ProviderContextProvider>
  );
};

export default App;
