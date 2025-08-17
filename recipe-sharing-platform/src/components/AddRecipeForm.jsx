import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
    // State to hold form input values
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState('');

    // State for validation and feedback messages
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Reset previous messages
        setError('');
        setSuccessMessage('');

        // --- Step 2: Implement Validation ---
        // Basic check for empty fields
        if (!title.trim() || !ingredients.trim() || !steps.trim()) {
            setError('Please fill out all required fields.');
            return;
        }

        // Check for at least two ingredients
        const ingredientList = ingredients.split('\n').filter(item => item.trim() !== '');
        if (ingredientList.length < 2) {
            setError('Please list at least two ingredients, each on a new line.');
            return;
        }

        // --- Step 3: Simulate Form Submission ---
        const newRecipe = {
            title,
            ingredients: ingredientList, // Store ingredients as an array
            steps: steps.split('\n').filter(item => item.trim() !== ''),
            image, 
        };

        console.log('New Recipe Data:', newRecipe);

        // Clear form fields and show a success message
        setTitle('');
        setIngredients('');
        setSteps('');
        setImage('');
        setSuccessMessage('Recipe submitted successfully! Thank you for your contribution.');
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <Link to="/" className="inline-block mb-4 text-blue-600 font-semibold hover:underline">
                &larr; Back to all recipes
            </Link>
            
            <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
            
            <form 
                onSubmit={handleSubmit} 
                className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
                {/* --- Form Feedback Messages --- */}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                {/* --- Form Fields --- */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                        Image URL (Optional)
                    </label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
                        Ingredients
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="5"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y"
                    ></textarea>
                </div>

                <div className="mb-6">
                    <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
                        Preparation Steps
                    </label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows="8"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;