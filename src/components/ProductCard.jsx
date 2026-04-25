import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-[#F4F5F7] transition-all">
      {/* Image & Badges */}
      <div className="relative aspect-square overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        
        {/* Discount Badge (Red) */}
        {product.discount && (
          <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white flex items-center justify-center text-sm">
            -{product.discount}%
          </div>
        )}

        {/* New Badge (Green) - Optional addition */}
        {product.isNew && (
          <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#2EC1AC] text-white flex items-center justify-center text-sm">
            New
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-[#3A3A3A] mb-1">{product.name}</h3>
        <p className="text-[#898989] mb-2">{product.subTitle}</p>
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Rp {product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">Rp {product.oldPrice}</span>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#3A3A3A]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
        <button 
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product); // FIX: Passing the product data here
          }}
          className="bg-white text-[#B88E2F] px-10 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white transition-all w-3/4"
        >
          Add to cart
        </button>
        
        <div className="flex gap-4 text-white text-sm font-semibold">
           {/* Share icon or Share text could go here */}
           <Link to={`/product/${product.id}`} className="flex items-center gap-1 hover:text-[#B88E2F] transition-all">
             View Detail
           </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;