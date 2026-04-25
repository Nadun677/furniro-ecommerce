import React from 'react';

const BrowseRange = () => {
  const categories = [
    { title: "Dining", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
    { title: "Living", img: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=800" },
    { title: "Bedroom", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800" }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#333]">Browse The Range</h2>
        <p className="text-[#666] mt-2">Explore our curated collections for every room in your home.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="text-center group cursor-pointer">
            <div className="rounded-lg overflow-hidden h-[480px] mb-4">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#333]">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseRange;