import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import flowerData from '../data/FlowerData';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist } from '../pages/WatchListContext';
import '../css/Collection.css';

const FlowerCard = ({ flower }) => {
  const navigate= useNavigate();
  const { wishlist, toggleWishlist } = useWishlist();
  const isWishlisted = wishlist.some(item => item.id === flower.id);


   

  return (
    <div className="flower-card">
      <div className="wishlist-icon" onClick={() => toggleWishlist(flower)}>
        {isWishlisted ? <FaHeart color="#d63384" /> : <FaRegHeart color="#aaa" />}
      </div>
      <img src={flower.flowerImage} alt={flower.name} className="flower-image" />
      <div className="flower-info">
        <div><strong>Name:</strong> {flower.name}</div>
        <div><strong>Price:</strong> ₹{flower.price}</div>
        <div><strong>Rating:</strong> {flower.rating} ★</div><br />
        <Link to={`/order/${flower.id}`}><button>Buy Now</button></Link>
      </div>
    </div>
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
          <FlowerCard key={flower.id} flower={flower} />
        ))}
      </div>
    </>
  );
};

export default FlowerCollection;
