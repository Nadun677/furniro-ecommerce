import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Added for dynamic cart count
import { UserCheck, Search, Heart, ShoppingCart, Menu, X } from 'lucide-react'; // Added Menu and X

const Navbar = ({ onCartClick }) => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white py-6 px-4 md:px-14 sticky top-0 z-50 shadow-sm font-poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-8 md:w-12 md:h-8 bg-[#B88E2F] flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">Furniro</h1>
        </Link>

        {/* 2. Desktop Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-12 font-medium text-base">
          <li>
            <Link to="/" className="hover:text-[#B88E2F] transition-all">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-[#B88E2F] transition-all">Shop</Link>
          </li>
          <li>
            <Link to="/comparison" className="hover:text-[#B88E2F] transition-all">Comparison</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#B88E2F] transition-all">Contact</Link>
          </li>
        </ul>

        {/* 3. Icon Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Icons hidden on small mobile to save space, visible on tablet up */}
          <button className="hidden sm:block hover:text-[#B88E2F] transition-all">
            <UserCheck size={24} />
          </button>
          <button className="hidden sm:block hover:text-[#B88E2F] transition-all">
            <Search size={24} />
          </button>
          <button className="hidden sm:block hover:text-[#B88E2F] transition-all">
            <Heart size={24} />
          </button>
          
          {/* Cart Toggle Button (Always visible) */}
          <button 
            onClick={onCartClick} 
            className="hover:text-[#B88E2F] transition-all relative"
          >
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B88E2F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle (Visible only on Mobile) */}
          <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col py-6 px-6 gap-6 shadow-xl animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={toggleMenu} className="text-lg font-medium hover:text-[#B88E2F]">Home</Link>
          <Link to="/shop" onClick={toggleMenu} className="text-lg font-medium hover:text-[#B88E2F]">Shop</Link>
          <Link to="/comparison" onClick={toggleMenu} className="text-lg font-medium hover:text-[#B88E2F]">Comparison</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-lg font-medium hover:text-[#B88E2F]">Contact</Link>
          
          <div className="flex gap-8 pt-4 border-t border-gray-100 text-gray-600">
            <UserCheck size={20} />
            <Search size={20} />
            <Heart size={20} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;