"use client";

import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "../skeleton/BlogCardSkeleton";
import endpoints from "@/config/endpoints";
import { showToastError } from "@/config/toast";
import LoadMoreButton from "../buttons/LoadMoreButton";

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(4); // Initial blogs to show
  const [isExpanded, setIsExpanded] = useState(false); // Track if the blogs are expanded
  const [loading, setLoading] = useState(true); // Track loading state

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
    } finally {
      setLoading(false); // Set loading to false once data is fetched
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

  // Display skeletons if loading
  if (loading) {
    return (
      <div className="flex flex-col items-center lg:pt-28 lg:px-40 pt-6 px-8 gap-0 py-9">
        <div>
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center lg:pt-28 lg:px-40 pt-6 px-8 gap-0 py-9">
      <div>
        {blogs.slice(0, visibleBlogs).map((blog, index) => {
          const { blog_title, blog_content, pictures, date } = blog;
          const lastImage = pictures[pictures.length - 1]?.url;
          const isOnlyBlog = blogs.length === 1;

          return (
            <BlogCard
              key={blog.blog_id}
              title={blog_title}
              content={blog_content}
              lastImage={lastImage}
              date={date}
              isOnlyBlog={isOnlyBlog}
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
