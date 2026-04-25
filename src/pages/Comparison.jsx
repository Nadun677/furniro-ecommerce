import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import { ChevronDown, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Comparison = () => {
  const { comparisonItems, addToCart } = useCart();

  return (
    <div className="w-full font-poppins">
      <PageHeader title="Product Comparison" />

      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 items-start">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium leading-tight">Go to Product page for more Products</h3>
            <Link to="/shop" className="text-[#727272] underline underline-offset-8 decoration-[#727272] font-medium hover:text-black">View More</Link>
          </div>

          {/* Dynamic Product Columns */}
          {comparisonItems && comparisonItems.length > 0 ? (
            comparisonItems.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className="bg-[#F9F1E7] rounded-lg p-6 h-44 flex items-center justify-center">
                  <img src={item.image} className="max-h-full object-contain" alt={item.name} />
                </div>
                <h4 className="text-xl font-medium">{item.name}</h4>
                <p className="text-sm font-medium">Rs. {item.price}</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">4.7</span>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/>
                  </div>
                  <span className="text-xs text-[#9F9F9F] border-l pl-2">204 Reviews</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 py-10 flex items-center justify-center border-2 border-dashed border-[#F9F1E7] rounded-xl text-[#9F9F9F]">
              No products selected for comparison.
            </div>
          )}

          {/* Add Selector */}
          <div className="pt-10">
            <h3 className="text-xl font-semibold mb-4">Add A Product</h3>
            <Link to="/shop">
              <button className="w-full bg-[#B88E2F] text-white flex items-center justify-between px-4 py-3 rounded-md font-medium hover:bg-black transition-all">
                Choose a Product
                <ChevronDown size={20} />
              </button>
            </Link>
          </div>
        </div>

        {/* Table Section */}
        <div className="border-t border-[#E8E8E8] pt-10">
          <div className="grid grid-cols-4 border-b border-[#E8E8E8] pb-4 mb-4">
            <div className="text-xl font-medium">General</div>
            <div /> <div /> <div />
          </div>
          
          <div className="grid grid-cols-4 py-4 text-sm md:text-base">
            <div className="font-medium">Sales Package</div>
            {comparisonItems?.map(item => (
              <div key={item.id} className="text-[#727272]">1 sectional sofa</div>
            ))}
          </div>

          <div className="grid grid-cols-4 py-4 text-sm md:text-base border-b border-[#E8E8E8]">
            <div className="font-medium">Model Number</div>
            {comparisonItems?.map(item => (
              <div key={item.id} className="text-[#727272]">{item.sku || 'TFCBLGRBL6SRHS'}</div>
            ))}
          </div>

          <div className="grid grid-cols-4 mt-20 gap-8">
            <div />
            {comparisonItems?.map(item => (
              <div key={item.id} className="flex justify-start">
                <button 
                  onClick={() => addToCart(item, 1)}
                  className="bg-[#B88E2F] text-white px-8 py-3 text-sm font-medium hover:bg-black transition-all"
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Services />
    </div>
  );
};

export default Comparison;