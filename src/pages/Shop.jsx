import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  // Logic to filter and search products
  const filteredProducts = useMemo(() => {
    return productsData
      .filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "Price: Low to High") return parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, ''));
        if (sortBy === "Price: High to Low") return parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, ''));
        return 0;
      });
  }, [searchQuery, categoryFilter, sortBy]);

  return (
    <div className="w-full font-poppins">
      <PageHeader title="Shop" />

      {/* Filter & Search Bar Section */}
      <div className="bg-[#F9F1E7] py-6 px-4 md:px-16 flex flex-wrap justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer border-r border-[#9F9F9F] pr-6">
            <SlidersHorizontal size={20} />
            <span className="text-xl">Filter</span>
          </div>
          <div className="flex gap-4 border-r border-[#9F9F9F] pr-6">
            <LayoutGrid size={24} className="cursor-pointer" />
            <List size={24} className="cursor-pointer" />
          </div>
          <p className="text-sm">
            Showing {filteredProducts.length} of {productsData.length} results
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {/* Search Input */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Search</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search furniture..."
              className="h-12 px-4 bg-white outline-none rounded-sm border border-transparent focus:border-[#B88E2F]"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm">Show</span>
            <select 
              className="h-12 w-16 bg-white text-[#9F9F9F] px-2 outline-none"
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Sofa">Sofa</option>
              <option value="Chair">Chair</option>
              <option value="Table">Table</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">Short by</span>
            <select 
              className="h-12 px-4 bg-white text-[#9F9F9F] outline-none"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl text-[#9F9F9F]">No products found matching your search.</h3>
          </div>
        )}

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-8 mt-16">
          <button className="w-12 h-12 bg-[#B88E2F] text-white rounded-lg">1</button>
          <button className="w-12 h-12 bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white rounded-lg transition-all">2</button>
          <button className="w-12 h-12 bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white rounded-lg transition-all">3</button>
          <button className="px-6 h-12 bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white rounded-lg transition-all">Next</button>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default Shop;