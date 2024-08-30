"use client";

import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import endpoints from "@/config/endpoints";
import { showToastError } from "@/config/toast";
import LoadMoreButton from "../buttons/LoadMoreButton";

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(4); // Initial blogs to show
  const [isExpanded, setIsExpanded] = useState(false); // Track if the blogs are expanded

  const fetchBlogs = async () => {
    try {
      const url = endpoints.fetchBlogs;
      const response = await fetch(url);
      if (!response.ok) {
        showToastError("Network response was not ok");
        return;
      }
      const data = await response.json();
      if (data.length > 0) {
        setBlogs(data);
      }
    } catch (error) {
      showToastError("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleLoadMoreOrLess = () => {
    if (isExpanded) {
      setVisibleBlogs(4); // Show only the initial 4 blogs when collapsing
    } else {
      setVisibleBlogs(blogs.length); // Show all blogs when expanding
    }
    setIsExpanded(!isExpanded); // Toggle the state
  };

  if (blogs.length === 0) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <div className="flex flex-col items-center lg:pt-28 lg:px-40 pt-6 px-8 gap-0 py-9">
      <div data-aos="zoom-out">
        {blogs.slice(0, visibleBlogs).map((blog, index) => {
          const { blog_title, blog_content, pictures, date } = blog;
          const lastImage = pictures[pictures.length - 1]?.url;
          const isOnlyBlog = blogs.length === 1; // Determine if there is only one blog

          return (
            <BlogCard
              key={blog.blog_id}
              title={blog_title}
              content={blog_content}
              lastImage={lastImage}
              date={date}
              isOnlyBlog={isOnlyBlog} // Pass the isOnlyBlog prop
            />
          );
        })}

        {blogs.length > 4 && (
          <LoadMoreButton
            isExpanded={isExpanded}
            onClick={handleLoadMoreOrLess}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPreview;
