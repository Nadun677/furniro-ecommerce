const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-end px-10 lg:px-20 bg-[url('/hero-banner.jpg')] bg-cover bg-center">
      
      {/* The Floating Box */}
      <div className="bg-[#FFF3E3] p-8 md:p-12 max-w-[640px] rounded-md shadow-sm">
        <h6 className="uppercase tracking-[3px] font-semibold text-sm mb-4">New Arrival</h6>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-body text-lg mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-primary text-white font-bold px-12 py-6 uppercase hover:bg-[#a17a22] transition-colors">
          Buy Now
        </button>
      </div>

    </section>
  );
};

export default Hero;