import BlogPreview from "@/components/blogs/BlogPreview";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <SectionSeparator title="Blogs" subHeading="Home > Blog" />
      <div className="mx-auto container">
        <BlogPreview />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
