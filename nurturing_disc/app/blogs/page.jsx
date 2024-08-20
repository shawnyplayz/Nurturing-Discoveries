import BlogPreview from "@/components/blogs/BlogPreview";
import SectionSeparator from "@/components/SectionSeparator";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <SectionSeparator title="Our Blogs" subHeading="Home > Blog" />
      <div>
        <BlogPreview/>
      </div>
    </div>
  );
};

export default Blogs;