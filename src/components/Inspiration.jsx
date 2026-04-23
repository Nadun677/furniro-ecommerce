const Inspiration = () => {
  return (
    <section className="bg-[#FCF8F3] py-16 px-10 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
      
      {/* Left Content */}
      <div className="lg:w-1/3 text-left">
        <h2 className="text-4xl font-bold text-[#3A3A3A] leading-tight">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-[#616161] mt-4 mb-8">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-primary text-white font-bold px-10 py-3 hover:bg-[#a17a22] transition-colors">
          Explore More
        </button>
      </div>

      {/* Right Slider Area (Visual Placeholder) */}
      <div className="lg:w-2/3 flex gap-6">
        {/* Main Image with Label */}
        <div className="relative min-w-[350px] md:min-w-[400px] h-[550px]">
          <img 
            src="/inner-peace.jpg" 
            alt="Room Inspiration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 bg-white/70 backdrop-blur-md p-8">
            <p className="text-[#616161] flex items-center gap-2">
              01 <span className="w-8 h-[1px] bg-[#616161]"></span> Bed Room
            </p>
            <h3 className="text-2xl font-bold text-[#3A3A3A] mt-2">Inner Peace</h3>
          </div>
          <button className="absolute bottom-10 left-[218px] bg-primary p-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Side Image (Partial) */}
        <div className="min-w-[350px] h-[450px] opacity-80">
          <img 
            src="/side-room.jpg" 
            alt="Secondary Inspiration" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Inspiration;