const BrowseRange = () => {
  const categories = [
    { name: "Dining", img: "/dining.jpg" }, // Add these images to your public folder
    { name: "Living", img: "/living.jpg" },
    { name: "Bedroom", img: "/bedroom.jpg" },
  ];

  return (
    <section className="py-16 px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-heading">Browse The Range</h2>
        <p className="text-body mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="overflow-hidden rounded-xl h-[480px] w-full">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-heading">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseRange;