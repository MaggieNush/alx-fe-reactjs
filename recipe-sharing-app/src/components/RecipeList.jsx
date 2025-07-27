import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return(
        <div>
    {recipes.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <p>{recipe.ingredients}</p>
                <p>{recipe.instructions}</p>
            </div>
        ))}
        </div>
    );
};

export default RecipeList;