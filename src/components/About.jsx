import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();

  useEffect(() => {
    const handleReload = () => {
      const lastVisitedRoute = localStorage.getItem('lastVisitedRoute');
      if (!lastVisitedRoute || lastVisitedRoute === '/home') {
        const currentPath = window.location.pathname;
        if (currentPath !== '/home') {
          window.location.href = '/home';
        }
      }
    };

    window.addEventListener('beforeunload', handleReload);

    return () => {
      window.removeEventListener('beforeunload', handleReload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('lastVisitedRoute', location.pathname);
  }, [location]);

  return (
    <div>
      <h1>Welcome to my page</h1>
    </div>
  );
}

export default About;

