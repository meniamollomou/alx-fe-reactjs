import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Blog Post {id}</h2>
      <p>This is the detail page for blog post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
