import { ChevronRight } from "lucide-react";

const PageHeader = ({ title }) => {
  return (
    <div className="relative h-[300px] w-full flex flex-col items-center justify-center bg-[#F9F1E7] mb-10">
      <h1 className="text-5xl font-medium text-black">{title}</h1>
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="font-bold text-black">Home</span>
        <ChevronRight size={16} />
        <span className="font-light">{title}</span>
      </div>
    </div>
  );
};

export default PageHeader;