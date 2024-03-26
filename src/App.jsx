import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from './components/Layout';

function App() {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastVisitedRoute', location.pathname);
  }, [location]);

  useEffect(() => {
    const lastVisitedRoute = localStorage.getItem('lastVisitedRoute');
    if (!lastVisitedRoute || lastVisitedRoute === '/home') {
      const currentPath = window.location.pathname;
      if (currentPath !== '/home') {
        window.location.href = '/home';
      }
    }
  }, []);

  return (
    <Layout />
  );
}

export default App;







