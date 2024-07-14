import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: {item.price}$</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemove(item.id)} className="remove-button">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;