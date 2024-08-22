import { FaArrowRightLong } from "react-icons/fa6";

const LoadMoreButton = ({ isExpanded, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#F39F5F] flex flex-row items-center justify-center px-10 py-5 rounded-3xl gap-2 text-white font-bold"
    >
      {isExpanded ? "Load Less" : "Load More"}
      <FaArrowRightLong />
    </button>
  );
};

export default LoadMoreButton;
