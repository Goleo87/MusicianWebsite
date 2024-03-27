import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Intro({ onComplete }) {
    const [redirect, setRedirect] = useState(false);
  
    // Function to handle click and initiate redirect
    const handleClick = () => {
      setRedirect(true);
      onComplete(); // Call the onComplete function provided by props
    };
  
    return redirect ? (
      <Navigate to="/" />
    ) : (
      <div className="intro-container" onClick={handleClick}>
        <div className="intro-content">
          <img
            className="intro-image"
            src="youtube.png" // Replace with the path to your intro image
            alt="Intro"
          />
        </div>
      </div>
    );
  }
  
  export default Intro;
