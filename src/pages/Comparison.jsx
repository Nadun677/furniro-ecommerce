import React from 'react';
import { Link } from 'react-router-dom';
import { Star, X } from 'lucide-react'; // Added X icon
import { useCart } from '../context/CartContext';

const Comparison = () => {
  // Destructure removeFromComparison from your context
  const { comparisonItems, addToCart, removeFromComparison } = useCart();

  return (
    <div className="w-full font-poppins pb-20">
      {/* 1. Header Banner */}
      <div className="relative h-72 bg-[url('/cart-banner.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center">
          <img src="/logo.png" alt="logo" className="mx-auto mb-2 w-12" />
          <h1 className="text-5xl font-medium">Product Comparison</h1>
          <p className="mt-4"><span className="font-bold">Home</span> {'>'} Comparison</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Intro Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium leading-tight">Go to Product page for more Products</h2>
            <Link to="/shop" className="text-[#727272] underline underline-offset-8 font-medium block hover:text-black">
              View More
            </Link>
          </div>

          {/* Dynamic Comparison Columns */}
          {comparisonItems && comparisonItems.length > 0 ? (
            comparisonItems.slice(0, 3).map((product) => (
              <div key={product.id} className="space-y-4 relative group">
                
                {/* REMOVE BUTTON (The X) */}
                <button 
                  onClick={() => removeFromComparison(product.id)}
                  className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full p-1 shadow-md hover:bg-black transition-all z-20"
                >
                  <X size={18} />
                </button>

                <div className="bg-[#F9F1E7] rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                </div>
                
                <h3 className="text-2xl font-medium">{product.name}</h3>
                <p className="font-medium text-lg">Rs. {product.price}</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">4.7</span>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} />
                  </div>
                  <span className="text-[#9F9F9F] text-xs border-l pl-2">204 Reviews</span>
                </div>
              </div>
            ))
          ) : (
            <div className="md:col-span-2 py-10 bg-[#F9F1E7] rounded-xl text-center">
              <p className="text-[#9F9F9F]">No products added to comparison yet.</p>
              <Link to="/shop" className="text-[#B88E2F] font-bold">Browse Shop</Link>
            </div>
          )}

          {/* Add Product Placeholder */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Add A Product</h3>
            <Link to="/shop">
              <button className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-black transition-colors">
                Choose a Product
              </button>
            </Link>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="mt-20 border-t pt-10 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="py-8 text-2xl font-medium w-1/4">General</th>
                {comparisonItems.map(item => <th key={item.id} className="w-1/4"></th>)}
                {/* Fill empty columns to maintain grid */}
                {[...Array(Math.max(0, 3 - comparisonItems.length))].map((_, i) => <th key={i} className="w-1/4"></th>)}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-4 font-medium">Sales Package</td>
                {comparisonItems.map(item => <td key={item.id} className="py-4">1 sectional sofa</td>)}
                {[...Array(Math.max(0, 3 - comparisonItems.length))].map((_, i) => <td key={i}></td>)}
              </tr>
              <tr className="border-b">
                <td className="py-4 font-medium">Model Number</td>
                {comparisonItems.map(item => <td key={item.id} className="py-4">{item.sku || 'TFCBLIGRBL6'}</td>)}
                {[...Array(Math.max(0, 3 - comparisonItems.length))].map((_, i) => <td key={i}></td>)}
              </tr>
              <tr className="border-b">
                <td className="py-4 font-medium">Secondary Material</td>
                {comparisonItems.map(item => <td key={item.id} className="py-4">Solid Wood</td>)}
                {[...Array(Math.max(0, 3 - comparisonItems.length))].map((_, i) => <td key={i}></td>)}
              </tr>
            </tbody>
            
            <thead>
              <tr>
                <th className="py-8 text-2xl font-medium">Product</th>
                {comparisonItems.map(item => <th key={item.id}></th>)}
                {[...Array(Math.max(0, 3 - comparisonItems.length))].map((_, i) => <th key={i}></th>)}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-4 font-medium">Filling Material</td>
                {comparisonItems.map(item => <td key={item.id} className="py-4">Foam</td>)}
                {[...Array(Math.max(0, 3 - comparisonItems.length))].map((_, i) => <td key={i}></td>)}
              </tr>
              <tr className="border-b">
                <td className="py-4"></td>
                {comparisonItems.map(item => (
                  <td key={item.id} className="py-8">
                    <button 
                      onClick={() => addToCart(item, 1)}
                      className="bg-[#B88E2F] text-white px-8 py-3 rounded hover:bg-black transition-all"
                    >
                      Add To Cart
                    </button>
                  </td>
                ))}
                {[...Array(Math.max(0, 3 - comparisonItems.length))].map((_, i) => <td key={i}></td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-[#FAF3EA] py-24 px-10 grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        <div className="flex items-center gap-4">
          <img src="/f1.png" alt="High Quality" className="w-12" />
          <div><h4 className="text-2xl font-semibold">High Quality</h4><p className="text-[#898989]">crafted from top materials</p></div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/f2.png" alt="Warranty" className="w-12" />
          <div><h4 className="text-2xl font-semibold">Warranty Protection</h4><p className="text-[#898989]">Over 2 years</p></div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/f3.png" alt="Free Shipping" className="w-12" />
          <div><h4 className="text-2xl font-semibold">Free Shipping</h4><p className="text-[#898989]">Order over 150 $</p></div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/f4.png" alt="Support" className="w-12" />
          <div><h4 className="text-2xl font-semibold">24 / 7 Support</h4><p className="text-[#898989]">Dedicated support</p></div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;