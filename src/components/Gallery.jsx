import React, { useState } from "react";

function Gallery() {
  const [images, setImage] = useState(["back.png", "bridge.jpg", "OIP.jpeg"]);
  useState(images);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`gallery ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
