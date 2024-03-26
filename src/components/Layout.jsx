import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Home from "./Home";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const handleReload = () => {
      const lastVisitedRoute = localStorage.getItem("lastVisitedRoute");
      if (!lastVisitedRoute || lastVisitedRoute === "/home") {
        const currentPath = window.location.pathname;
        if (currentPath !== "/home") {
          window.location.href = "/home";
        }
      }
    };

    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("lastVisitedRoute", location.pathname);
  }, [location]);

  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </div>
  );
}

export default Layout;



