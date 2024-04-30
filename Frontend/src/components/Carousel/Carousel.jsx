import React, { useState, useEffect } from 'react';

const Carousel = ({ images, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true); // Autoplay enabled by default

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 1600); // Change image every 2 seconds
    }

    return () => clearInterval(intervalId);
  }, [autoplay, images]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ position: 'relative' }}>
        <div className="image-container" style={{ width: '94%', height: height, margin: '5vh auto', overflow: 'hidden', position: 'relative' }}>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="carousel-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div className="dot-container" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center' }}>
            {images.map((image, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                style={{
                  backgroundColor: index === currentIndex ? 'black' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  padding: '5px',
                  margin: '0 5px',
                  borderRadius: '50%',
                  transition: 'background-color 0.3s ease-in-out',
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
