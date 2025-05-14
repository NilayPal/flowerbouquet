import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import flowerData from "../data/FlowerData";
import "../css/OrderPage.css";
import { useCart } from "./CartContext";

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const itemId = parseInt(id);
  const item = flowerData.find((flower) => flower.id === itemId);

  const [quantity, setQuantity] = useState(1);
  const totalPrice = (item.price * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart(item, quantity);
    alert(`Added ${quantity} of "${item.name}" to cart!`);
    navigate("/");
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="order-page">
      <div className="order-card">
        <img src={item.flowerImage} alt={item.name} className="order-image" />
        <div className="order-details">
          <h2>{item.name}</h2>
          <p>
            <strong>Price:</strong> ₹{item.price}
          </p>
          <p>
            <strong>Rating:</strong> {item.rating} ★
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>

          <div className="quantity-control">
            <label>Quantity:</label>
            <div className="quantity-buttons">
              <button onClick={decreaseQuantity} disabled={quantity === 1}>
                −
              </button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <p>
            <strong>Total Price:</strong> ₹{totalPrice}
          </p>

          <div className="button-group">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
