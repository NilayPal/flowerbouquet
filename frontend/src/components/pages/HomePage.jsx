import React, { useEffect, useState } from 'react';
import '../css/Slider.css';
import Collection from './Collection';
import HallofFame from './HallofFame';
import About from './About';

const images = [
 'https://plus.unsplash.com/premium_photo-1674986175088-2d7dda41f7f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000); // auto-rotate every 3 seconds
    return () => clearInterval(interval);
  }, [length]);

  return (
    <>
    <div className="slider">
      {images.map((img, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={img} alt={`Slide ${index + 1}`} className="image" />
          )}
        </div>
      ))}

      
    </div>
    <Collection/>
    <HallofFame/>
    <About/>
    </>
  );
};

export default ImageSlider;
