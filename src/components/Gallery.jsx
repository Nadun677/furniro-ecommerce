const Gallery = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-[#616161] font-semibold">Share your setup with</p>
        <h2 className="text-4xl font-bold text-[#3A3A3A]">#FurniroFurniture</h2>
      </div>

      {/* Masonry-style Grid Container */}
      <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[700px] w-[150%] -translate-x-[25%] lg:w-full lg:translate-x-0">
        
        {/* Top Left */}
        <div className="col-span-2 row-span-1">
          <img src="/g1.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>
        <div className="col-span-3 row-span-1 mt-10">
          <img src="/g2.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>

        {/* Center Main */}
        <div className="col-span-2 row-span-2 flex items-center justify-center">
          <img src="/g3.jpg" className="w-full h-4/5 object-cover" alt="gallery" />
        </div>

        {/* Top Right */}
        <div className="col-span-3 row-span-1 mt-10">
          <img src="/g4.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>
        <div className="col-span-2 row-span-1">
          <img src="/g5.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>

        {/* Bottom Left */}
        <div className="col-span-1 row-span-1">
           <img src="/g6.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>
        <div className="col-span-4 row-span-1">
           <img src="/g7.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>

        {/* Bottom Right */}
        <div className="col-span-2 row-span-1">
           <img src="/g8.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>
        <div className="col-span-3 row-span-1">
           <img src="/g9.jpg" className="w-full h-full object-cover" alt="gallery" />
        </div>

      </div>
    </section>
  );
};

export default Gallery;