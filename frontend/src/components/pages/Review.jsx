import React from "react";
import "../css/Review.css";

const reviews = [
  {
    name: "Emily Johnson",
    text: "Absolutely amazing service! The flowers were beautiful and delivered on time.",
  },
  {
    name: "Mark Thompson",
    text: "Great experience. The customer support was helpful and friendly.",
  },
  {
    name: "Sophia Lee",
    text: "Loved the arrangement! Will definitely order again.",
  },
  {
    name: "John Smith",
    text: "Affordable and gorgeous! Made our wedding extra special.",
  },
    {
    name: "John Smith",
    text: "Affordable and gorgeous! Made our wedding extra special.",
  },
    {
    name: "John Smith",
    text: "Affordable and gorgeous! Made our wedding extra special.",
  },
];

const CustomerReviews = () => {
  return (
    <div className="reviews-container">
      <h2 className="reviews-title">What Our Customers Say</h2>
      <div className="reviews-scroll">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">"{review.text}"</p>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
