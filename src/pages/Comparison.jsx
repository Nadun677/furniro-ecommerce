import React from 'react';
import { Link } from 'react-router-dom';
import { Star, X, Trophy, ShieldCheck, Truck, Headset } from 'lucide-react'; 
import { useCart } from '../context/CartContext';

// 1. Correctly import structural background images and logos to maintain Vite stability
import bannerImg from '../assets/banner1.webp'; 
import logoImg from '../assets/Mask Group.png'; 

const Comparison = () => {
  const { comparisonItems, addToCart, removeFromComparison } = useCart();

  // Standard feature items mapped to robust vectors instead of broken static pngs
  const features = [
    { icon: <Trophy size={40} className="text-[#242424]" strokeWidth={1.5} />, title: "High Quality", desc: "crafted from top materials" },
    { icon: <ShieldCheck size={40} className="text-[#242424]" strokeWidth={1.5} />, title: "Warranty Protection", desc: "Over 2 years" },
    { icon: <Truck size={40} className="text-[#242424]" strokeWidth={1.5} />, title: "Free Shipping", desc: "Order over 150 $" },
    { icon: <Headset size={40} className="text-[#242424]" strokeWidth={1.5} />, title: "24 / 7 Support", desc: "Dedicated support" }
  ];

  // We enforce a fixed maximum grid of 3 comparison slots to match the Furniro spec
  const maxComparisonSlots = 3;
  const displayItems = comparisonItems ? comparisonItems.slice(0, maxComparisonSlots) : [];
  const emptySlotsCount = Math.max(0, maxComparisonSlots - displayItems.length);

  return (
    <div className="w-full font-poppins pb-20">
      
      {/* 1. Header Banner using dynamic styling background image */}
      <div 
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="relative h-72 bg-cover bg-center flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px]"></div>
        <div className="relative z-10 text-center">
          <img src={logoImg} alt="logo" className="mx-auto mb-2 w-10 h-auto object-contain" />
          <h1 className="text-4xl md:text-5xl font-medium text-black">Product Comparison</h1>
          <p className="mt-2 text-sm text-black font-medium">
            <Link to="/" className="hover:underline">Home</Link> &gt; Comparison
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-16">
        
        {/* Product Selection Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Column 1: Intro Routing Action Links */}
          <div className="space-y-2 pt-4">
            <h2 className="text-2xl font-medium leading-snug text-black">
              Go to Product page for more Products
            </h2>
            <Link to="/shop" className="text-[#727272] underline underline-offset-8 font-medium block hover:text-[#B88E2F] transition-colors">
              View More
            </Link>
          </div>

          {/* Dynamic Map Rendering across exactly 3 available product comparison card cells */}
          {displayItems.map((product) => (
            <div key={product.id} className="space-y-4 relative bg-white p-2 rounded-lg border border-transparent hover:border-gray-100 transition-all">
              
              {/* REMOVE BUTTON */}
              <button 
                onClick={() => removeFromComparison(product.id)}
                className="absolute top-0 right-0 bg-[#B88E2F] text-white rounded-full p-1 shadow-md hover:bg-black transition-all z-20"
                title="Remove from comparison"
              >
                <X size={16} />
              </button>

              <div className="bg-[#F9F1E7] rounded-[10px] p-4 h-44 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
              </div>
              
              <h3 className="text-xl font-semibold text-black">{product.name}</h3>
              <p className="font-medium text-base text-[#3A3A3A]">Rs. {product.price}</p>
              
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">4.7</span>
                <div className="flex text-[#F4B400]">
                  {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                  <Star size={14} className="text-gray-300" />
                </div>
                <span className="text-[#9F9F9F] text-xs border-l border-[#9F9F9F] pl-2">204 Reviews</span>
              </div>
            </div>
          ))}

          {/* Render Empty Placeholders to preserve alignment spacing rules if slots are open */}
          {[...Array(emptySlotsCount)].map((_, index) => (
            <div key={`empty-${index}`} className="hidden md:flex flex-col justify-center items-center border-2 border-dashed border-gray-200 rounded-[10px] h-64 p-4 text-center bg-gray-50/50">
              <p className="text-sm text-gray-400 font-medium mb-3">Slot Available</p>
              <Link to="/shop" className="bg-[#B88E2F] text-white py-2 px-4 rounded text-xs font-semibold hover:bg-black transition-colors">
                Add Product
              </Link>
            </div>
          ))}

          {/* Column 4: Explicit static Call To Action sidebar link button block */}
          {displayItems.length === maxComparisonSlots && (
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-medium text-black">Add A Product</h3>
              <Link to="/shop" className="block">
                <button className="w-full bg-[#B88E2F] text-white py-2.5 px-4 rounded text-sm font-semibold hover:bg-black transition-colors shadow-sm">
                  Choose a Product
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* 2. Structured Robust Data Comparison Matrix Table */}
        <div className="mt-20 border-t border-gray-200 pt-10 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px] table-fixed">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-4 text-2xl font-semibold text-black w-1/4 pb-6">General</th>
                {displayItems.map(item => <th key={item.id} className="w-1/4 py-4 font-semibold text-lg text-black">{item.name}</th>)}
                {[...Array(emptySlotsCount)].map((_, i) => <th key={`header-empty-${i}`} className="w-1/4 py-4"></th>)}
              </tr>
            </thead>
            <tbody className="text-base text-[#3A3A3A]">
              <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 font-medium text-black">Sales Package</td>
                {displayItems.map(item => <td key={item.id} className="py-4 text-gray-600">1 {item.category || 'Item'}</td>)}
                {[...Array(emptySlotsCount)].map((_, i) => <td key={`pkg-empty-${i}`} className="py-4"></td>)}
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 font-medium text-black">Model Number</td>
                {displayItems.map(item => <td key={item.id} className="py-4 font-mono text-sm text-gray-600">{item.sku || 'N/A'}</td>)}
                {[...Array(emptySlotsCount)].map((_, i) => <td key={`sku-empty-${i}`} className="py-4"></td>)}
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 font-medium text-black">Secondary Material</td>
                {displayItems.map(item => <td key={item.id} className="py-4 text-gray-600">Solid Wood / Metal</td>)}
                {[...Array(emptySlotsCount)].map((_, i) => <td key={`mat-empty-${i}`} className="py-4"></td>)}
              </tr>
            </tbody>
            
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-8 text-2xl font-semibold text-black w-1/4">Product Specifications</th>
                {displayItems.map(item => <th key={item.id} className="w-1/4 py-8"></th>)}
                {[...Array(emptySlotsCount)].map((_, i) => <th key={`spec-empty-h-${i}`} className="w-1/4 py-8"></th>)}
              </tr>
            </thead>
            <tbody className="text-base text-[#3A3A3A]">
              <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 font-medium text-black">Filling Material</td>
                {displayItems.map(item => <td key={item.id} className="py-4 text-gray-600">High Density Foam</td>)}
                {[...Array(emptySlotsCount)].map((_, i) => <td key={`fill-empty-${i}`} className="py-4"></td>)}
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 font-medium text-black">Description</td>
                {displayItems.map(item => <td key={item.id} className="py-4 text-sm text-gray-500 italic max-w-xs truncate">{item.description}</td>)}
                {[...Array(emptySlotsCount)].map((_, i) => <td key={`desc-empty-${i}`} className="py-4"></td>)}
              </tr>
              <tr>
                <td className="py-6"></td>
                {displayItems.map(item => (
                  <td key={item.id} className="py-6">
                    <button 
                      onClick={() => addToCart(item, 1)}
                      className="bg-[#B88E2F] text-white text-xs md:text-sm font-semibold px-6 py-2.5 rounded hover:bg-black transition-all shadow-sm"
                    >
                      Add To Cart
                    </button>
                  </td>
                ))}
                {[...Array(emptySlotsCount)].map((_, i) => <td key={`btn-empty-${i}`} className="py-6"></td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Modernized Vector Icon-Based Features Bar layout */}
      <div className="bg-[#FAF3EA] py-16 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
        {features.map((feat, idx) => (
          <div key={idx} className="flex items-center gap-4 max-w-[280px] mx-auto md:mx-0">
            <div className="flex-shrink-0">{feat.icon}</div>
            <div>
              <h4 className="text-xl font-semibold text-[#242424] mb-0.5">{feat.title}</h4>
              <p className="text-[#898989] text-sm font-medium">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Comparison;