import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);
        return (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            <button
              onClick={() =>
                isFavorite
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
            >
              {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
