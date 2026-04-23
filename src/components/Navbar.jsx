import { Search, Heart, ShoppingCart, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-3xl font-bold font-poppins">Furniro</span>
      </div>

      {/* Links */}
      <ul className="flex gap-10 font-medium">
        <li className="cursor-pointer hover:text-primary">Home</li>
        <li className="cursor-pointer hover:text-primary">Shop</li>
        <li className="cursor-pointer hover:text-primary">About</li>
        <li className="cursor-pointer hover:text-primary">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex gap-6">
        <UserCircle className="w-6 h-6 cursor-pointer" />
        <Search className="w-6 h-6 cursor-pointer" />
        <Heart className="w-6 h-6 cursor-pointer" />
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;