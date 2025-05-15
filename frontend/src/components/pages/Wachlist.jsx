import React from 'react';
import { useWishlist } from '../pages/WatchListContext';
import { Link } from 'react-router-dom';
import '../css/Collection.css';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="heading">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist. <Link to="/">Browse Flowers</Link></p>
      ) : (
        <div className="flower-collection">
          {wishlist.map(flower => (
            <div key={flower.id} className="flower-card">
              <div className="wishlist-icon" onClick={() => toggleWishlist(flower)}>
                <span style={{ color: '#d63384' }}>♥</span>
              </div>
              <img src={flower.flowerImage} alt={flower.name} className="flower-image" />
              <div className="flower-info">
                <div><strong>Name:</strong> {flower.name}</div>
                <div><strong>Price:</strong> ₹{flower.price}</div>
                <div><strong>Rating:</strong> {flower.rating} ★</div><br />
                <Link to={`/order/${flower.id}`}><button>Buy Now</button></Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
