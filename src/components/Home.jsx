import { useEffect, useState } from 'react';
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
        <p>
          Hello! My name is Stefano, Welcome to my single-page application portfolio! This portfolio showcases my skills, projects, and experiences in a user-friendly and interactive manner. Whether You are a potential employer, colleague, or simply curious about my work, I hope this portfolio provides you with insights into my abilities and accomplishments. {" "}
        </p>
        <p>
      

        </p>
      </div>
      <div className={`image ${showContainers ? 'show' : ''}`}>
        <img src={Fano} alt="ste" />
      </div>
    </div>
    
  );
}

export default Home;

