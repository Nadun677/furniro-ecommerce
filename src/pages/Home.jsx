import React from 'react';
import Hero from '../components/Hero';
import BrowseRange from '../components/BrowseRange';
import ProductGrid from '../components/ProductGrid';
import Inspiration from '../components/Inspiration';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <>
      <Hero />
      <BrowseRange />
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <ProductGrid limit={8} /> 
      </div>
      <Inspiration />
      <Gallery />
    </>
  );
};

export default Home;