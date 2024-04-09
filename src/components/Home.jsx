import React, { useEffect, useState } from 'react';
import Fano from "/Fano1.png";

function Home() {
  const [showContainers, setShowContainers] = useState(false);

  useEffect(() => {
    // Set showContainers to true after a delay to trigger the animation
    const timeoutId = setTimeout(() => {
      setShowContainers(true);
    }, 500); // Adjust delay as needed
  
    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`homepage ${showContainers ? 'show' : ''}`}>
      <div className="text">
        <h1>Welcome to my Portfolio</h1>
        <p>
          Hello!, My name is Stefano and I am a web developer, Producer, Content
          Creator based in Germany.{" "}
        </p>
        <p>
          I am passionate about creating and developing websites, music, and
          videos. I am always looking for new projects and collaborations. Feel
          free to contact me.
        </p>
      </div>
      <div className={`image ${showContainers ? 'show' : ''}`}>
        <img src={Fano} alt="picture of the intro" />
      </div>
    </div>
    
  );
}

export default Home;

