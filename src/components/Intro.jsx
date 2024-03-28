import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Intro({ onComplete }) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true); // Set redirect to true after a certain duration
      onComplete(); // Call the onComplete function provided by props
    }, 3000); // Adjust the duration as needed (3000 milliseconds = 3 seconds)

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [onComplete]);

  return redirect ? (
    <Navigate to="/" />
  ) : (
    <div className="intro-container">
      <div className="intro-content">
        <img
          className="intro-image"
          src="Intro.png" // Replace with the path to your intro image
          alt="Intro"
        />
      </div>
    </div>
  );
}

export default Intro;

