import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const LoadMoreButton = ({ isExpanded, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#F39F5F] flex flex-row items-center justify-center px-10 py-5 rounded-3xl gap-2 text-white font-bold hover:bg-white hover:text-peach hover:border-2 transition-all ease-in-out hover:border-[#F39F5F] border-[#F39F5F] border-2 "
    >
      {isExpanded ? "Load Less" : "Load More"}
      {isExpanded ? <FaArrowUpLong /> : <FaArrowDownLong />}
    </button>
  );
};

export default LoadMoreButton;
