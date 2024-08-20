// components/BlogContent.js
import Image from "next/image";
import BlogFormator from "./BlogFormator";

const formatDate = (dateStr) => {
  const dateObj = new Date(dateStr);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

const BlogCard = ({ title, content, lastImage, date }) => {
  return (
    <div className="flex flex-row gap-14 border-b border-red-700 py-16">
      <div>
        {lastImage && (
          <Image
            src={lastImage}
            className="object-contain max-w-96"
            width={500}
            height={500}
            objectFit="fill"
            alt="Blog image"
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="text-lg text-gray-600">
          {formatDate(date)}
        </div>
        <div className="font-quicksandMedium font-medium text-5xl pb-3">
          {title}
        </div>
        <div>
          <BlogFormator content={content} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
