import React, { useState } from 'react';
import './ShoppingCart.css'; // Importing custom CSS for styling

const ShoppingCart = () => {
    // Initial cart data
    const initialCart = [
      {
        id: 1,
        title: 'Portable mini sealing machine battery operated (Useful for Food Storage Vacuum Bag, Chip, Plastic, Snack Bags)',
        price: 230.00,
        quantity: 1,
        imageUrl: '/assets/4321133283.jpg', // Example image URL
      },
      // Add more products as needed
    ];
  
    const [cart, setCart] = useState(initialCart);
    const [specialInstructions, setSpecialInstructions] = useState('');
  
    // Function to increase quantity
    const increaseQuantity = (id) => {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    };
  
    // Function to decrease quantity
    const decreaseQuantity = (id) => {
      setCart(cart.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ));
    };
  
    // Calculate total cost of the cart
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    // Calculate any discounts (if needed)
    const calculateDiscount = () => {
      // Example: 10% discount for total over Rs. 500
      return calculateTotal() > 500 ? calculateTotal() * 0.1 : 0;
    };
  
    const handleSpecialInstructionsChange = (e) => {
      setSpecialInstructions(e.target.value);
    };
  
    const handleCheckout = () => {
      alert('Proceeding to checkout...');
      // Implement checkout functionality here
    };
  
    const handleBackToShopping = () => {
      window.location.href = '/shop';
    };
  
    return (
      <div className="cart-container">
        <div className="cart-left">
          <h2>Your Cart</h2>
  
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="product-image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="product-details">
                  <h4>{item.title}</h4>
                  <p>Rs. {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <div className="item-total">
                    <p>Rs. {item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Right Side - Summary, Discount, Checkout */}
        <div className="cart-right">
          <h3>Order Summary</h3>
  
          {/* Special Instructions */}
          <div className="special-instructions">
            <label htmlFor="specialInstructions">Order special instructions</label>
            <textarea
              id="specialInstructions"
              value={specialInstructions}
              onChange={handleSpecialInstructionsChange}
              placeholder="Add any special instructions for your order"
            />
          </div>
  
          {/* Pricing Summary */}
          <div className="pricing-summary">
            <div className="summary-item">
              <p>Subtotal</p>
              <p>Rs. {calculateTotal()}</p>
            </div>
            {calculateDiscount() > 0 && (
              <div className="summary-item">
                <p>Discount</p>
                <p>- Rs. {calculateDiscount()}</p>
              </div>
            )}
            <div className="summary-item">
              <h4>Total</h4>
              <h4>Rs. {calculateTotal() - calculateDiscount()}</h4>
            </div>
          </div>
  
          {/* Buttons */}
          <div className="checkout-btn">
            <button onClick={handleCheckout}>Buy Now</button>
          </div>
  
          <div className="back-to-shopping-btn">
            <button onClick={handleBackToShopping}>Back to Shopping</button>
          </div>
        </div>
      </div>
    );
  };

export default ShoppingCart;
