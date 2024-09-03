import Image from "next/image";
import BlogFormator from "./BlogFormator";
import BlogCardSkeleton from "../skeleton/BlogCardSkeleton";

const formatDate = (dateStr) => {
  const dateObj = new Date(dateStr);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
};

const BlogCard = ({ title, content, lastImage, date, isOnlyBlog, loading }) => {
  if (loading) {
    return <BlogCardSkeleton />;
  }

  return (
    <div
      className={`grid lg:flex md:flex-row md:gap-[4.5rem] gap-7 ${
        !isOnlyBlog ? "border-b border-gray-300" : ""
      } md:py-16 py-4`}
    >
      <div>
        {lastImage && (
          <div className="w-full h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src={lastImage}
              layout="fill"
              className="object-cover"
              alt="Blog image"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="text-[#717171] font-sans font-normal text-sm pb-3">
          {formatDate(date)}
        </div>
        <div className="font-quicksandMedium font-medium text-3xl md:text-4xl pb-3 md:text-left">
          {title}
        </div>
        <div className="font-normal text-base md:text-xl font-quicksandRegular">
          <BlogFormator content={content} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
