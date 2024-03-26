import  { useState } from 'react';

function Gallery() {
  const [images, setImages] = useState(['img1.jpg', 'img2.jpg', 'img3.jpg']); // Placeholderimage names

  
  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;