"use client";

import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import endpoints from "@/config/endpoints";
import { showToastError } from "@/config/toast";

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const url = endpoints.fetchBlogs;
      const response = await fetch(url); // Use standard fetch here
      if (!response.ok) {
        showToastError("Network response was not ok");
        return;
      }
      const data = await response.json(); // Convert the response to JSON
      if (data.length > 0) {
        setBlogs(data); // Set all blogs
      }
    } catch (error) {
      showToastError("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (blogs.length === 0) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <div className="flex flex-col items-center lg:pt-28 lg:px-40 pt-6 px-20">
      {blogs.map((blog) => {
        const { blog_title, blog_content, pictures, date } = blog;
        const lastImage = pictures[pictures.length - 1]?.url;

        return (
          <BlogCard
            key={blog.blog_id}
            title={blog_title}
            content={blog_content}
            lastImage={lastImage}
            date={date}
          />
        );
      })}
    </div>
  );
};

export default BlogPreview;
