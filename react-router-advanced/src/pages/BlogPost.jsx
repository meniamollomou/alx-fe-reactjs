// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamic blog post page for ID {id}.</p>
    </div>
  );
}
