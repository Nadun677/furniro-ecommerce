import React from 'react';

const Inspiration = () => {
  return (
    <section className="bg-[#FCF8F3] py-16 flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 overflow-hidden">
      {/* Left Content */}
      <div className="lg:w-1/3">
        <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4 leading-tight">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-[#616161] mb-8">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#a17a22] transition-colors">
          Explore More
        </button>
      </div>

      {/* Right Images (Simplified for now) */}
      <div className="flex gap-6 lg:w-2/3">
        <div className="relative w-[350px] h-[550px] flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" 
            className="w-full h-full object-cover" 
            alt="Room Inspiration"
          />
          <div className="absolute bottom-10 left-6 bg-white/70 backdrop-blur-md p-6">
            <p className="text-sm text-[#616161]">01 — Bed Room</p>
            <h4 className="text-2xl font-bold text-[#3A3A3A]">Inner Peace</h4>
          </div>
        </div>
        <div className="w-[350px] h-[450px] flex-shrink-0 opacity-50">
           <img 
            src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" 
            className="w-full h-full object-cover" 
            alt="Room Inspiration 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Inspiration;