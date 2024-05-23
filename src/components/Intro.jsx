import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Intro({ onComplete }) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true); // Set redirect to true after a certain duration
      onComplete(); // Call the onComplete function provided by props
    }, 2000); // Adjust the duration as needed (in milliseconds)
    return () => clearTimeout(timer); // Clear the timer on component unmount to avoid memory leaks
  }, [onComplete]);

  return redirect ? (
    <Navigate to="/" />
  ) : (
    <div className="intro-container">
      <div className="intro-content">
        <img
          className="intro-image"
          src="Intro.png" 
          alt="Intro"
        />
      </div>
    </div>
  );
}

export default Intro;

