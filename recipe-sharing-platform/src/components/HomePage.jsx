import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Featured Recipes</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                            {/* We replace the <a> tag with <Link> */}
                            <Link
                                to={`/recipe/${recipe.id}`} // The dynamic route with the recipe's ID
                                className="inline-block bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            >
                                View Recipe
                            </Link> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;