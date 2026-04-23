const FilterBar = () => {
  return (
    <div className="bg-[#F9F1E7] p-10 flex justify-between items-center w-full">
       <div className="flex gap-4">
          <span className="font-bold">FILTER SECTION</span>
          {/* Add a temporary text to confirm it's rendering */}
          <p className="text-black">BAR IS HERE</p>
       </div>
       <div>Showing results...</div>
    </div>
  );
};

export default FilterBar;