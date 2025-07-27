import { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import RecipeList from "./RecipeList";

const RecommendationsList = () => {
    const recommendations = useRecipeStore(state => state.recommendations);
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
    const favorites = useRecipeStore(state => state.favorites);
    const addFavorites = useRecipeStore(state => state.addFavorites);
    const removeFavorites = useRecipeStore(state => state.removeFavorites);

    useEffect(() => {
        generateRecommendations();
    }, [favorites, generateRecommendations]);

    if (recommendations.length === 0) {
        return (
            <div className="recommendations-empty" >
                <h3>Personalized Recommendations</h3>
                <p>No recommendations available yet!</p>
                <p>Start by favoriting some recipes to get personalized recommendations!</p>
            </div>
        );
    }

    return (
        <div className="recommendations">
            <h3>Recommended for You</h3>
            <div className="recommendations-container">
                {recommendations.map(recipe => (
                    <RecipeList>
                        key={recipe.id}
                        recipe={recipe}
                        isFavorite={favorites.includes(recipe.id)}
                        onFavoriteToggle={() => {
                            if (favorites.includes(recipe.id)) {
                                removeFavorites(recipe.id);
                            } else {
                                addFavorites(recipe.id);
                            }
                            generateRecommendations();
                        }}
                    </RecipeList>
                ))}
            </div>
        </div>
    );
};

export default RecommendationsList;