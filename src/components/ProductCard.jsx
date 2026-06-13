import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Share2, ArrowRightLeft, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, addToComparison } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col h-full font-poppins"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#E0E0E0]">
        {/* Product Image - Reads dynamically from your fixed products.js imports */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Badges Container (Top Right) */}
        <div className="absolute top-5 right-5 flex flex-col gap-2 z-10">
          {/* Discount Badge (Red) */}
          {product.discount && (
            <div className="w-12 h-12 rounded-full bg-[#E97171] text-white flex items-center justify-center text-sm font-medium">
              -{product.discount}%
            </div>
          )}

          {/* New Badge (Green/Teal) - Matches your data entry for item 'Respira' */}
          {product.isNew && (
            <div className="w-12 h-12 rounded-full bg-[#2EC1AC] text-white flex items-center justify-center text-sm font-medium">
              New
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 px-6 z-20">
          
          {/* Main Action: Add to Cart */}
          <button 
            onClick={() => addToCart(product, 1)}
            className="bg-white text-[#B88E2F] w-full py-3 font-semibold hover:bg-[#B88E2F] hover:text-white transition-colors duration-300"
          >
            Add to cart
          </button>

          {/* Secondary Action: View Detail */}
          <Link 
            to={`/product/${product.id}`} 
            className="bg-transparent border border-white text-white w-full py-3 font-semibold text-center hover:bg-white hover:text-black transition-all duration-300"
          >
            View Detail
          </Link>
          
          {/* Quick Action Icons */}
          <div className="flex gap-4 text-white font-semibold text-sm mt-2">
            <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <Share2 size={16} /> Share
            </button>
            <button 
              onClick={() => addToComparison(product)} 
              className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors"
            >
              <ArrowRightLeft size={16} /> Compare
            </button>
            <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <Heart size={16} /> Like
            </button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-grow bg-[#F4F5F7]">
        <h3 className="text-2xl font-semibold text-[#3A3A3A] mb-1">
          {product.name}
        </h3>
        <p className="text-[#898989] font-medium mb-3 flex-grow text-sm">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-auto flex-wrap gap-2">
          <span className="text-xl font-semibold text-[#3A3A3A]">
            Rs. {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[#B0B0B0] line-through text-sm">
              Rs. {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;