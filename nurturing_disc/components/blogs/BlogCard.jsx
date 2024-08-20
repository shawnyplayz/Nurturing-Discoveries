// components/BlogContent.js
import Image from "next/image";
import BlogFormator from "./BlogFormator";

const BlogCard = ({ title, content, lastImage }) => {
  return (
    <div className="flex flex-row gap-14">
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
