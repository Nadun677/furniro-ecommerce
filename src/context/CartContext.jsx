import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('furniro_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // NEW: Comparison State initialized as an empty array
  const [comparisonItems, setComparisonItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('furniro_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  // NEW: Add to Comparison Function
  const addToComparison = (product) => {
    setComparisonItems(prev => {
      if (prev.find(item => item.id === product.id)) return prev;
      if (prev.length >= 3) return [...prev.slice(1), product]; 
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.toString().replace(/,/g, ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      cartTotal,
      comparisonItems, // Shared data
      addToComparison  // Shared function
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);