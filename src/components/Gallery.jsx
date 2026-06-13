import React from 'react';

const Gallery = () => {
  return (
    <section className="py-20 overflow-hidden border-t border-gray-100">
      <div className="text-center mb-10">
        <p className="text-[#616161] font-semibold">Share your setup with</p>
        <h2 className="text-4xl font-bold text-[#3A3A3A]">#FurniroFurniture</h2>
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 px-4 space-y-4">
        
        <div className="break-inside-avoid">
          <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=600" alt="Gallery 2" className="w-full rounded-sm" />
        </div>
        <div className="break-inside-avoid">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600" alt="Gallery 3" className="w-full rounded-sm" />
        </div>
        <div className="break-inside-avoid">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600" alt="Gallery 4" className="w-full rounded-sm" />
        </div>
       
        <div className="break-inside-avoid">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600" alt="Gallery 6" className="w-full rounded-sm" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;