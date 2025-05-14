import { useCart } from "../pages/CartContext";
import "../css/CartPage.css";

const CartPage = () => {
  const { cartItems } = useCart();

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.flowerImage} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price} each</p>
                <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3>Total Price: ₹{getTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
