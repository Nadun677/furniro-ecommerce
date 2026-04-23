const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pt-16 pb-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Funiro.</h2>
          <p className="text-[#9F9F9F] leading-relaxed">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[#9F9F9F] font-medium mb-8">Links</h4>
          <ul className="space-y-6 font-semibold">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">Shop</a></li>
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-[#9F9F9F] font-medium mb-8">Help</h4>
          <ul className="space-y-6 font-semibold">
            <li><a href="#" className="hover:text-primary">Payment Options</a></li>
            <li><a href="#" className="hover:text-primary">Returns</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[#9F9F9F] font-medium mb-8">Newsletter</h4>
          <div className="flex items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="border-b border-black py-1 focus:outline-none w-full"
            />
            <button className="border-b border-black py-1 font-bold uppercase hover:text-primary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-left">
        <p className="font-medium text-[#333333]">2023 furino. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;