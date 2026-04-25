import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#D9D9D9] pt-20 pb-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-black">Furniro.</h2>
          <p className="text-[#9F9F9F] leading-6">
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-8">
          <h4 className="text-[#9F9F9F] font-medium">Links</h4>
          <ul className="space-y-8 font-medium">
            <li><Link to="/" className="hover:text-[#B88E2F] transition-all">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[#B88E2F] transition-all">Shop</Link></li>
            <li><Link to="/about" className="hover:text-[#B88E2F] transition-all">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#B88E2F] transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="space-y-8">
          <h4 className="text-[#9F9F9F] font-medium">Help</h4>
          <ul className="space-y-8 font-medium">
            <li><Link to="/payment-options" className="hover:text-[#B88E2F] transition-all">Payment Options</Link></li>
            <li><Link to="/returns" className="hover:text-[#B88E2F] transition-all">Returns</Link></li>
            <li><Link to="/privacy-policies" className="hover:text-[#B88E2F] transition-all">Privacy Policies</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-8">
          <h4 className="text-[#9F9F9F] font-medium">Newsletter</h4>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="border-b border-black outline-none pb-1 text-sm w-full md:w-auto"
            />
            <button className="border-b border-black font-bold text-sm uppercase hover:text-[#B88E2F] hover:border-[#B88E2F] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#D9D9D9]">
        <p className="text-black font-medium">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;