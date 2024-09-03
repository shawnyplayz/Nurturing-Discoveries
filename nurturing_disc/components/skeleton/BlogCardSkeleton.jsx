import { Skeleton } from "@mui/material";

const BlogCardSkeleton = () => {
  return (
    <div className="grid lg:flex md:flex-row md:gap-[4.5rem] gap-7 border-b border-gray-300 md:py-16 py-4">
      <div>
        <div className="w-full h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton variant="text" width={120} height={30} className="mb-3" />
        <Skeleton variant="text" width={250} height={40} className="mb-3" />
        <Skeleton variant="text" width="100%" height={60} />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
