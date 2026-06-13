import React from 'react';
// 1. Import your local images correctly for Vite
import diningImg from "../assets/dinning.webp";
import livingImg from "../assets/Living-and-dining_1_1_2200x.webp";
import bedroomImg from "../assets/bedrrom.webp";

const BrowseRange = () => {
  // 2. Reference the imported variables inside your categories array
  const categories = [
    { title: "Dining", img: diningImg },
    { title: "Living", img: livingImg },
    { title: "Bedroom", img: bedroomImg }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-poppins">
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold text-[#3A3A3A]">Browse The Range</h2>
        <p className="text-[#666666] mt-2 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="text-center group cursor-pointer">
            {/* Standardized box height with clean rounded corners */}
            <div className="rounded-[10px] overflow-hidden h-[480px] mb-4 shadow-sm">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Styled label matches the Furniro typography design */}
            <h3 className="text-2xl font-semibold text-[#3A3A3A] mt-6 group-hover:text-[#B88E2F] transition-colors">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseRange;