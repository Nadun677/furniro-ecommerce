import React, { useState, useMemo } from 'react';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard'; // Ensure this path is correct
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

const Shop = () => {
  const [viewType, setViewType] = useState('grid'); // 'grid' or 'list'
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Filter by Search
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by Category
    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    // Sort Logic
    if (sortBy === 'price-low') {
      result.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, '')));
    }

    return result;
  }, [category, sortBy, searchTerm]);

  return (
    <div className="w-full font-poppins">
      {/* Banner */}
      <div className="relative h-60 bg-[url('/shop-banner.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <h1 className="relative z-10 text-5xl font-medium">Shop</h1>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#F9F1E7] py-6 px-4 md:px-16 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <SlidersHorizontal size={20} />
            <span className="text-xl">Filter</span>
          </div>
          <div className="flex gap-4 border-l border-[#9F9F9F] pl-6">
            <LayoutGrid 
              className={`cursor-pointer ${viewType === 'grid' ? 'text-black' : 'text-[#9F9F9F]'}`} 
              onClick={() => setViewType('grid')}
            />
            <List 
              className={`cursor-pointer ${viewType === 'list' ? 'text-black' : 'text-[#9F9F9F]'}`} 
              onClick={() => setViewType('list')}
            />
          </div>
          <p className="border-l border-[#9F9F9F] pl-6 text-sm">
            Showing 1–{filteredProducts.length} of {productsData.length} results
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {/* Search Input */}
          <input 
            type="text" 
            placeholder="Search products..." 
            className="px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-[#B88E2F]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="flex items-center gap-4">
            <span>Show</span>
            <select 
              className="bg-white px-4 py-3 text-[#9F9F9F] outline-none"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Sofa">Sofa</option>
              <option value="Chair">Chair</option>
              <option value="Table">Table</option>
              <option value="Lamp">Lamp</option>
              <option value="Beds">Bed Room Set</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span>Sort by</span>
            <select 
              className="bg-white px-4 py-3 text-[#9F9F9F] outline-none"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`max-w-7xl mx-auto py-16 px-4 ${
        viewType === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8' 
          : 'flex flex-col gap-8'
      }`}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} horizontal={viewType === 'list'} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-xl text-[#9F9F9F]">
            No products found matching your criteria.
          </div>
        )}
      </div>

      {/* Features Bar (Standard Furniro footer bar) */}
    </div>
  );
};

export default Shop;