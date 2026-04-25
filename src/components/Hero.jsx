import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-end px-10 lg:px-20 bg-[url('/hero-banner.jpg')] bg-cover bg-center">
      
      <div className="bg-[#FFF3E3] p-8 md:p-12 max-w-[640px] rounded-md shadow-sm">
        <h6 className="uppercase tracking-[3px] font-semibold text-sm mb-4 text-[#333]">New Arrival</h6>
        <h1 className="text-4xl md:text-6xl font-bold text-[#B88E2F] mb-6 leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-[#666] text-lg mb-10">
          Experience premium furniture designed for modern living. Quality and comfort meet style.
        </p>
        
        {/* Changed button to Link */}
        <Link 
          to="/shop" 
          className="inline-block bg-[#B88E2F] text-white font-bold px-12 py-6 uppercase hover:bg-[#a17a22] transition-colors"
        >
          Buy Now
        </Link>
      </div>

    </section>
  );
};

export default Hero;