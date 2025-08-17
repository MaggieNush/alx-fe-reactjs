import { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []); // Ensures the effect runs only once on mount

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Featured Recipes</h1>
            
            {/* Grid containers for the recipe cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Map over the recipe cards and create a card for each recipe */}
                {recipes.map(recipe => (
                    <div 
                        key={recipe.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
                            <a
                                href="#" // Placeholder for a detailed recipe page link
                                className="inline-block bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            >View Recipe
                            </a> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;