import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Comparison from './pages/Comparison';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  // Logic to open/close the Cart Sidebar
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      {/* Navbar toggles the sidebar */}
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      {/* The Sidebar (stays outside routes to be accessible everywhere) */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* FIX: Added /:id so that /product/1 actually shows the page */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
          {/* Optional: Add a fallback for just /product */}
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;