const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-[#F4F5F7] overflow-hidden">
      {/* Image Container */}
      <div className="relative h-[300px] w-full">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        
        {/* Dynamic Badges */}
        {product.discount && (
          <div className="absolute top-5 right-5 bg-[#E97171] text-white rounded-full h-12 w-12 flex items-center justify-center font-medium">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-5 right-5 bg-[#2EC1AC] text-white rounded-full h-12 w-12 flex items-center justify-center font-medium">
            New
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#3A3A3A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6 px-4">
          <button className="bg-white text-primary font-bold py-3 px-12 hover:bg-primary hover:text-white transition-colors">
            Add to cart
          </button>
          <div className="flex gap-4 text-white font-semibold text-sm">
            <span className="cursor-pointer hover:opacity-70">Share</span>
            <span className="cursor-pointer hover:opacity-70">Compare</span>
            <span className="cursor-pointer hover:opacity-70">Like</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">{product.name}</h3>
        <p className="text-[#898989] mb-2">{product.subTitle}</p>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-[#3A3A3A]">Rp {product.price}</span>
          {product.oldPrice && (
            <span className="text-[#B0B0B0] line-through font-medium">Rp {product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;