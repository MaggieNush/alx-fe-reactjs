import useRecipeStore from "./recipeStore";
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const EditRecipeForm = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [formData, setFormData] = useState({
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients.join('\n'),
        instructions: recipe.instructions,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedRecipe = {
            ...formData,
            ingredients: formData.ingredients.split('\n').filter(line => line.trim()),
        };
        
        updateRecipe(recipeId, updatedRecipe);
        navigate(`/recipe/${recipeId}`);
    };

    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <label>
                Title:
                <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                />
            </label>

            <label>
                Description:
                <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </label>

            <label>
                Ingredients:
                <textarea 
                    name="ingredients" 
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                    />
            </label>

            <label>
                Instructions:
                <textarea 
                    name="instructions" 
                    value={formData.instructions}
                    onChange={handleChange}
                    required
                />
            </label>

            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;