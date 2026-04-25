const FilterBar = () => {
  return (
    <div className="bg-[#F9F1E7] px-10 py-6 flex justify-between items-center mb-10">
      <div className="flex gap-6 items-center">
        <button className="flex items-center gap-2 font-medium">Filter</button>
        <span className="border-l border-gray-400 pl-6 text-sm">Showing 1–16 of 32 results</span>
      </div>
      <div className="flex gap-4 items-center">
        <span>Show</span>
        <input type="text" className="w-10 h-10 bg-white text-center" placeholder="16" />
        <span>Short by</span>
        <input type="text" className="w-24 h-10 bg-white px-3" placeholder="Default" />
      </div>
    </div>
  );
};

export default FilterBar;