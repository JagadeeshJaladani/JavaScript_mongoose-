import React, { useState } from 'react';

const ShoppingCart = () => {
  // Initial cart state
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to add an item to the cart
  const addItem = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      
      // If item already exists in the cart, update quantity
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }

      // If item does not exist, add new item with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });

    // Update total count and price
    setTotalCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + item.price);
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== itemId);
      return updatedCart;
    });

    // Update total count and price
    setTotalCount((prevCount) => prevCount - 1);
    setTotalPrice((prevPrice) => {
      const itemToRemove = cart.find((item) => item.id === itemId);
      return prevPrice - itemToRemove.price * itemToRemove.quantity;
    });
  };

  // Render cart items
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      
      <div>
        <h3>Total Items: {totalCount}</h3>
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>

      {/* Example Add Item Button */}
      <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 100 })}>
        Add Item 1
      </button>
      <button onClick={() => addItem({ id: 2, name: 'Item 2', price: 200 })}>
        Add Item 2
      </button>
    </div>
  );
};

export default ShoppingCart;