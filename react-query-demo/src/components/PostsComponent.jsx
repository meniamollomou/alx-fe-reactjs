// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,     // cache considered fresh for 5s
    cacheTime: 1000 * 60 // cache kept in memory for 1 min
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>
        Refetch Posts
      </button>
      <ul>
        {data?.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
