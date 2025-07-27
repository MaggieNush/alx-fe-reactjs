import useRecipeStore from './recipeStore';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipe.id)
    );

    if (!recipe) {
        return <div>Recipe not found</div>
    }

    return (
        <div className='recipe-details'>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
            <div className='recipe-actions'>
                <Link to={`/recipes/${recipeId}/edit`} className='edit-button'>
                    Edit Recipe
                </Link>
                <DeleteRecipeButton recipeId={recipeId} />
            </div>
        </div>
    );
};

export default RecipeDetails;