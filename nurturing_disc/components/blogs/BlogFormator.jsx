import React, { useState } from "react";

function BlogFormator({ content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define a maximum length for the truncated content
  const maxLength = 300; // Adjust this value as needed

  // Create a truncated version of the content
  const truncatedContent =
    content.length > maxLength ? content.slice(0, maxLength) : content;

  // Toggle between expanded and truncated content
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine if content is longer than the max length
  const shouldShowToggle = content.length > maxLength;

  const styles = `
    .blog-content {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
    }

    .blog-content ul {
      list-style-type: disc;
      padding-left: 20px;
    }

    .blog-content ol {
      list-style-type: decimal;
      padding-left: 20px;
    }

    .blog-content li {
      margin-bottom: 8px;
    }

    .read-more {
      color: peach;
      cursor: pointer;
      font-weight: bold;
      display: inline;
      white-space: nowrap;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="blog-content">
        <span
          className="text-container"
          dangerouslySetInnerHTML={{
            __html: isExpanded
              ? content
              : truncatedContent + (shouldShowToggle ? "..." : ""),
          }}
        />
        {shouldShowToggle && (
          <span className="read-more text-peach pt-1" onClick={toggleContent}>
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        )}
      </div>
    </div>
  );
}

export default BlogFormator;
