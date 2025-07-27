import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        addRecipe({
            id:Date.now(), title, description, ingredients, instructions
        });
        setTitle('');
        setDescription('');
        setIngredients('');
        setInstructions('');
    };

    return(
        <form onSubmit={ handleSubmit }>
            <input type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            />
            
            <textarea value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description" />

            <textarea value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients" />
            
            <textarea value={instructions} 
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions" />

            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;