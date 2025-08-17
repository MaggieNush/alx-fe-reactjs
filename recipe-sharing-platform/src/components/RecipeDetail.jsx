import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // We need useParams to get the ID
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // 1. Extract the 'id' from the URL
  const [recipe, setRecipe] = useState(null); // 2. State to hold the selected recipe

  useEffect(() => {
    // 3. Find the recipe in the data based on the ID from the URL
    // We use `parseInt(id)` because the ID from the URL is a string
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe); // 4. Update the state with the found recipe
  }, [id]); // The effect depends on the 'id', so it re-runs if the ID changes

  // 5. Handle the case where the recipe is not found
  if (!recipe) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">Recipe Not Found!</h2>
        <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
      </div>
    );
  }

  // 6. Render the detailed recipe page
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Link to="/" className="inline-block mb-4 text-blue-600 font-semibold hover:underline">
        &larr; Back to all recipes
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 text-lg mb-8">{recipe.summary}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Ingredients</h2>
              <ul className="list-disc pl-5 text-gray-800 space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            {/* Instructions Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Instructions</h2>
              <ol className="list-decimal pl-5 text-gray-800 space-y-2">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;