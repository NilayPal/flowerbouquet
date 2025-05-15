import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (flower) => {
    setWishlist((prev) => {
      const exists = prev.some(item => item.id === flower.id);
      return exists
        ? prev.filter(item => item.id !== flower.id)
        : [...prev, flower];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
