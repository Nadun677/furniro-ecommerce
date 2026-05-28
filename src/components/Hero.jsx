import React from 'react';
import { Link } from "react-router-dom";
import heroImg from '../assets/banner1.webp'; // Import your image here

const Hero = () => {
  return (
    <section 
      style={{ backgroundImage: `url(${heroImg})` }} // Apply as inline style
      className="relative h-[80vh] w-full flex items-center justify-center md:justify-end px-4 md:px-20 bg-cover bg-center"
    >
      
      <div className="bg-[#FFF3E3] p-8 md:p-14 max-w-[640px] rounded-[10px] shadow-sm">
        <h6 className="uppercase tracking-[3px] font-semibold text-sm mb-4 text-[#333333]">New Arrival</h6>
        <h1 className="text-4xl md:text-[52px] font-bold text-[#B88E2F] mb-4 leading-[1.2]">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-[#333333] text-lg mb-12 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-[#B88E2F] text-white font-bold px-14 py-6 uppercase hover:bg-black transition-all"
        >
          Buy Now
        </Link>
      </div>

    </section>
  );
};

export default Hero;