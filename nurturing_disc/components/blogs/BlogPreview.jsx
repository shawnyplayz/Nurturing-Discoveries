import { BlogData } from "@/app/constants";
import Image from "next/image";
import React from "react";
import BlogFormator from "./BlogFormator";

const BlogPreview = () => {
  // Access the last image from the pictures array
  const lastImage = BlogData?.pictures[BlogData.pictures.length - 1];
  return (
    <div className="flex items-center justify-center pt-28 px-40">
      <div className="flex flex-row gap-14">
        <div>
          {lastImage && (
            <Image
              src={lastImage.url}
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
            {BlogData.blog_title}
          </div>
          <div>
            <BlogFormator content={BlogData.blog_content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
