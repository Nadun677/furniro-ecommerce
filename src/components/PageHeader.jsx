import { ChevronRight } from "lucide-react";

const PageHeader = ({ title }) => {
  return (
    <div className="relative h-[300px] w-full flex flex-col items-center justify-center bg-[#F9F1E7]">
      {/* Background decoration (Optional) */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">{title}</h1>
        <div className="flex items-center gap-2 mt-4 justify-center">
          <span className="font-bold">Home</span>
          <ChevronRight size={16} />
          <span className="font-light">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;