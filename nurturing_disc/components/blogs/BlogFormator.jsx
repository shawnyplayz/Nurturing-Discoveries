import React from "react";

function BlogFormator({ content }) {
  const styles = `
    .blog-content {
      padding: 16px;
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
  `;

  return (
    <div>
      <style>{styles}</style>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogFormator;
