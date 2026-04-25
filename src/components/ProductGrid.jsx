import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Syltherine", subTitle: "Stylish cafe chair", price: "2.500.000", oldPrice: "3.500.000", discount: 30, image: "/p1.png" },
    { id: 2, name: "Leviosa", subTitle: "Stylish cafe chair", price: "2.500.000", image: "/p2.png" },
    { id: 3, name: "Lolito", subTitle: "Luxury big sofa", price: "7.000.000", oldPrice: "14.000.000", discount: 50, image: "/p3.png" },
    { id: 4, name: "Respira", subTitle: "Outdoor bar table and stool", price: "500.000", isNew: true, image: "/p4.png" },
  ];

  return (
    <section className="py-12 px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="border-2 border-primary text-primary font-bold px-20 py-3 hover:bg-primary hover:text-white transition-colors">
          Show More
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;