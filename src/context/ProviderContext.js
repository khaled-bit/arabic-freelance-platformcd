// src/context/ProviderContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ProviderContext = createContext();

const ProviderContextProvider = ({ children }) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Fetch providers from an API or local data source
    const fetchProviders = async () => {
      // Replace with actual data fetching logic
      const data = [
        {
          id: 1,
          name: 'أمينة الخياط',
          rating: 4.8,
          reviews: 35,
          description: 'خبيرة في خدمات الخياطة والتطريز بأعلى جودة.',
          worksDone: 50,
          services: [
            { id: 1, title: 'تعديل الملابس', price: 100 },
            { id: 2, title: 'خياطة حسب الطلب', price: 200 },
          ],
          photo: 'https://via.placeholder.com/150',
          phone: '01012345678',
          email: 'amina@example.com',
        },
        {
          id: 2,
          name: 'مروة المصممة',
          rating: 4.5,
          reviews: 20,
          description: 'مصممة ملابس عصرية.',
          worksDone: 30,
          services: [
            { id: 1, title: 'تعديل الملابس', price: 120 },
            { id: 3, title: 'تطريز مخصص', price: 150 },
          ],
          photo: 'https://via.placeholder.com/150',
          phone: '01098765432',
          email: 'marwa@example.com',
        },
        // Add more providers as needed
      ];
      setProviders(data);
    };

    fetchProviders();
  }, []);

  return (
    <ProviderContext.Provider value={{ providers }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderContextProvider;
