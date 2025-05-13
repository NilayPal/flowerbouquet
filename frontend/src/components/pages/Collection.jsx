import React from 'react';
import '../css/Collection.css';

import flowerData from '../data/FlowerData';



const FlowerCard = ({ name, price, rating,flowerImage }) => {
  return (
        <>
       

    <div className="flower-card">      
     <img src={flowerImage} alt="Flower Bouquet" className="flower-image" />
      <div className="flower-info">
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Price:</strong> ₹{price}</div>
        <div><strong>Rating:</strong> {rating} ★</div>
      </div>
    </div>
    </>
  );
};



const FlowerCollection = () => {
  return (
    <>
        <div className='heading'>
        <h1>Our Collection</h1>
        <p>No matter the occasion, express your love with fresh blooms</p>
      </div>

    <div className="flower-collection">
      {flowerData.map(flower => (
        <FlowerCard
          key={flower.id}
          name={flower.name}
          price={flower.price}
          rating={flower.rating}
          flowerImage={flower.flowerImage}
        />
      ))}
    </div>
    </>
  );
};

export default FlowerCollection;
