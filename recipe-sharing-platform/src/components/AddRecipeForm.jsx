import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
    // State to hold form input values
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState('');

    // State for validation errors (an object)
    const [errors, setErrors] = useState({});

    // State for a success message
    const [successMessage, setSuccessMessage] = useState('');

    // --- New: The validate function ---
    // This function checks the form data and returns an object of errors
    const validate = () => {
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Recipe title is required.';
        }

        const ingredientList = ingredients.split('\n').filter(item => item.trim() !== '');
        if (ingredientList.length < 2) {
            newErrors.ingredients = 'Please list at least two ingredients, each on a new line.';
        }

        const stepList = steps.split('\n').filter(item => item.trim() !== '');
        if (stepList.length < 1) {
            newErrors.steps = 'Preparation steps are required.';
        }

        // Validates the image URL 
        if (image && !image.startsWith('http')) {
             newErrors.image = 'Please enter a valid URL.';
        }

        return newErrors;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const validationErrors = validate();
        setErrors(validationErrors);

        // Check if there are any errors. If the object is empty, the form is valid.
        if (Object.keys(validationErrors).length > 0) {
            setSuccessMessage(''); // Clear any previous success message
            return;
        }

        // --- Simulate Form Submission (Valid Data) ---
        const newRecipe = {
            title,
            ingredients: ingredients.split('\n').filter(item => item.trim() !== ''),
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
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                {/* --- Form Fields with Specific Error Messages --- */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                    {/* Display error message for this specific field */}
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
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
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
                        Ingredients (one per line)
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="5"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y"
                    ></textarea>
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
                        Preparation Steps (one per line)
                    </label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows="8"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y"
                    ></textarea>
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
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