import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // 1. State for Cart and Comparison
  const [cartItems, setCartItems] = useState([]);
  const [comparisonItems, setComparisonItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // 2. Persistent Storage (LocalStorage)
  // This ensures your items stay even if you refresh the page
  useEffect(() => {
    const savedCart = localStorage.getItem('furniro_cart');
    const savedComparison = localStorage.getItem('furniro_comparison');
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedComparison) setComparisonItems(JSON.parse(savedComparison));
  }, []);

  useEffect(() => {
    localStorage.setItem('furniro_cart', JSON.stringify(cartItems));
    calculateTotal();
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('furniro_comparison', JSON.stringify(comparisonItems));
  }, [comparisonItems]);

  // 3. Cart Logic
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    // alert(`${product.name} added to cart!`); // Simple feedback
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      // Remove commas from price string (e.g., "25,000" -> 25000)
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price.replace(/,/g, '')) 
        : item.price;
      return acc + (price * item.quantity);
    }, 0);
    setCartTotal(total);
  };

  // 4. Comparison Logic
  const addToComparison = (product) => {
    setComparisonItems((prev) => {
      // Limit to 3 products for comparison layout
      if (prev.find((item) => item.id === product.id)) {
        alert("Item already in comparison");
        return prev;
      }
      if (prev.length >= 3) {
        alert("You can only compare up to 3 products");
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromComparison = (productId) => {
    setComparisonItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        comparisonItems,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToComparison,
        removeFromComparison,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};