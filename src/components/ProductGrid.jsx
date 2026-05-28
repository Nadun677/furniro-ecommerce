import { Link } from "react-router-dom"; // Import Link
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Syltherine", subTitle: "Stylish cafe chair", price: "2.500.000", oldPrice: "3.500.000", discount: 30, image: "/src/assets/chair1.webp" },
    { id: 2, name: "Leviosa", subTitle: "Stylish cafe chair", price: "2.500.000", image: "/src/assets/chair2.jpg" },
    { id: 3, name: "Lolito", subTitle: "Luxury big sofa", price: "7.000.000", oldPrice: "14.000.000", discount: 50, image: "/src/assets/sofa1.webp" },
    { id: 4, name: "Respira", subTitle: "Outdoor bar table and stool", price: "500.000", isNew: true, image: "/src/assets/table1.avif" },
    // You can add more items here if you want them to show on the Home grid
  ];

  return (
    <section className="py-12 px-10 max-w-7xl mx-auto">
      {/* Grid Header */}
      <h2 className="text-[40px] font-bold text-center mb-10 text-[#3A3A3A]">Our Products</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Navigation Link disguised as a button */}
      <div className="flex justify-center mt-12">
        <Link 
          to="/shop" 
          className="border-2 border-[#B88E2F] text-[#B88E2F] font-bold px-20 py-3 hover:bg-[#B88E2F] hover:text-white transition-all duration-300 inline-block"
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default ProductGrid;