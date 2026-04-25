import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus } from 'lucide-react';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, addToComparison } = useCart(); 
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="py-40 text-center font-poppins">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-[#B88E2F] underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="w-full font-poppins">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-[#F9F1E7] py-8 px-4 md:px-16 flex items-center gap-4 text-sm mb-10">
        <Link to="/" className="text-[#9F9F9F] hover:text-black transition-colors">Home</Link>
        <span className="font-bold text-black">{'>'}</span>
        <Link to="/shop" className="text-[#9F9F9F] hover:text-black transition-colors">Shop</Link>
        <span className="font-bold text-black">|</span>
        <span className="text-black font-medium">{product.name}</span>
      </div>

      {/* 2. Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 pb-16">
        
        {/* Left: Product Images */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex md:flex-col gap-4 order-2 md:order-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-20 bg-[#F9F1E7] rounded-lg p-2 cursor-pointer border hover:border-[#B88E2F] transition-all">
                <img src={product.image} alt="thumbnail" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="bg-[#F9F1E7] rounded-lg p-8 flex-grow h-[500px] flex items-center justify-center order-1 md:order-2">
            <img src={product.image} alt={product.name} className="max-h-full object-contain" />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4">
          <h1 className="text-5xl font-normal text-black">{product.name}</h1>
          <p className="text-2xl text-[#9F9F9F] font-medium">Rs. {product.price}</p>
          
          <div className="flex items-center gap-4 border-b border-[#D9D9D9] pb-4">
            <div className="flex text-yellow-500">
              {[...Array(4)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              <Star size={18} className="text-[#9F9F9F]" />
            </div>
            <span className="text-[#9F9F9F] border-l border-[#9F9F9F] pl-4 text-xs">5 Customer Reviews</span>
          </div>

          <p className="text-xs leading-relaxed max-w-md pt-4 text-black">
            {product.description || "Setting the bar as one of the loudest in its class, this is a compact, stout-hearted hero with a well-balanced audio."}
          </p>

          {/* Size & Color Placeholders */}
          <div className="space-y-4 pt-4">
            <p className="text-[#9F9F9F] text-sm">Size</p>
            <div className="flex gap-3">
              {['L', 'XL', 'XS'].map(s => (
                <button key={s} className="w-8 h-8 rounded-md text-xs bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white transition-all">{s}</button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-6 pb-10 border-b border-[#D9D9D9]">
            <div className="flex items-center border border-[#9F9F9F] rounded-lg px-4 py-3 gap-8">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={16}/></button>
              <span className="font-medium">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}><Plus size={16}/></button>
            </div>
            
            <button 
              onClick={() => addToCart(product, quantity)}
              className="border border-black rounded-xl px-12 py-3 hover:bg-black hover:text-white transition-all text-sm"
            >
              Add To Cart
            </button>
            
            <button 
              onClick={() => addToComparison(product)}
              className="border border-black rounded-xl px-12 py-3 hover:bg-black hover:text-white transition-all text-sm"
            >
              + Compare
            </button>
          </div>

          {/* Metadata with Manual SVGs (No crash!) */}
          <div className="pt-10 space-y-3 text-[#9F9F9F] text-sm">
            <div className="flex gap-4"><span className="w-20">SKU</span><span>: {product.sku || 'SS001'}</span></div>
            <div className="flex gap-4"><span className="w-20">Category</span><span>: {product.category || 'Sofas'}</span></div>
            <div className="flex gap-4 items-center">
              <span className="w-20">Share</span>
              <div className="flex gap-4 text-black pl-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-[#B88E2F]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-[#B88E2F]"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-[#B88E2F]"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.9 3.54-.7 0-1.35-.2-1.93-.53v.05c0 2.06 1.47 3.78 3.44 4.18-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.1 2.92 3.95 2.95-1.45 1.13-3.27 1.81-5.25 1.81-.34 0-.67-.02-1-.06C3.04 19.14 5.23 20 7.6 20c9.13 0 14.11-7.56 14.11-14.11 0-.21 0-.43-.02-.64.97-.7 1.81-1.57 2.47-2.57z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Description Tabs Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 border-t border-[#D9D9D9] mt-16">
        <div className="flex justify-center gap-12 text-2xl mb-10">
          <button 
            onClick={() => setActiveTab('description')} 
            className={`transition-all ${activeTab === 'description' ? 'text-black font-medium border-b-2 border-black' : 'text-[#9F9F9F]'}`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('info')} 
            className={`transition-all ${activeTab === 'info' ? 'text-black font-medium border-b-2 border-black' : 'text-[#9F9F9F]'}`}
          >
            Additional Information
          </button>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8 text-[#9F9F9F] text-base leading-relaxed text-center">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, this piece takes the unmistakable look and sound of premium engineering and unplugs the chords to take the show on the road.</p>
          <p>Setting the bar as one of the loudest in its class, this is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 md:px-10">
          <div className="bg-[#F9F1E7] rounded-lg h-80 flex items-center justify-center p-4">
            <img src={product.image} alt="View 1" className="max-h-full object-contain" />
          </div>
          <div className="bg-[#F9F1E7] rounded-lg h-80 flex items-center justify-center p-4">
            <img src={product.image} alt="View 2" className="max-h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;