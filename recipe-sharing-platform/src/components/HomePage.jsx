import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json") // Load from static file
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-indigo-600 hover:underline"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
