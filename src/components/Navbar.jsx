import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Search, Heart, ShoppingCart } from 'lucide-react';

const Navbar = ({ onCartClick }) => {
  return (
    <nav className="w-full bg-white py-6 px-4 md:px-14 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      
      {/* 1. Logo Section */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-12 h-8 bg-[#B88E2F] flex items-center justify-center rounded-sm">
          {/* This represents the gold logo icon from your screenshots */}
          <span className="text-white font-bold text-xl">F</span>
        </div>
        <h1 className="text-3xl font-bold font-montserrat tracking-tighter">Furniro</h1>
      </Link>

      {/* 2. Navigation Links */}
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
      <div className="flex items-center gap-6 md:gap-8">
        <button className="hover:text-[#B88E2F] transition-all">
          <UserCheck size={24} />
        </button>
        <button className="hover:text-[#B88E2F] transition-all">
          <Search size={24} />
        </button>
        <button className="hover:text-[#B88E2F] transition-all">
          <Heart size={24} />
        </button>
        
        {/* Cart Toggle Button */}
        <button 
          onClick={onCartClick} 
          className="hover:text-[#B88E2F] transition-all relative"
        >
          <ShoppingCart size={24} />
          {/* Optional: Red dot notification */}
          <span className="absolute -top-1 -right-1 bg-[#B88E2F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </button>
      </div>

      {/* Mobile Menu (Optional simple version) */}
      <div className="md:hidden">
        {/* You could add a Menu icon here later */}
      </div>
    </nav>
  );
};

export default Navbar;