import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../css/Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const { flower, quantity } = location.state || {};

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    district: "",
    pincode: "",
    landmark: "",
  });

  if (!flower) {
    return <p>No product selected. <Link to="/">Go back to shop</Link></p>;
  }

  const total = (flower.price * quantity).toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-card">
        <img src={flower.flowerImage} alt={flower.name} className="checkout-image" />
        <div>
          <p><strong>Name:</strong> {flower.name}</p>
          <p><strong>Price:</strong> ₹{flower.price}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Total:</strong> ₹{total}</p>
          <p><strong>Rating:</strong> {flower.rating} ★</p>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>First Name:</label>
          <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Last Name:</label>
          <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Address:</label>
          <input type="text" name="address" required value={formData.address} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Address 2 (Optional):</label>
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>City:</label>
          <input type="text" name="city" required value={formData.city} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>District:</label>
          <input type="text" name="district" required value={formData.district} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Pincode:</label>
          <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Landmark:</label>
          <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
        </div>

        <button type="submit" className="confirm-button">Confirm Order</button>
      </form>
    </div>
  );
};

export default Checkout;
