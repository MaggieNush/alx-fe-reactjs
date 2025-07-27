import { create } from "zustand";

const useRecipeStore = create (set => ({
    recipes:[],
    searchTerm: '',
    filters: {
        maxCookingTime: null,
        requiredIngredients: [],
        difficulty: null,
    },

    setSearchTerm: (term) => set({searchTerm: term}),

    setFilters: (newFilters) => set({ filters: {...get().filters, ...newFilters}}),

    filteredRecipes: () => {
        const { recipes, searchTerm, filters } = get();

        return recipes.filter(recipe => {
            const matchesSearch =
                searchTerm === '' ||
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                recipe.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCookingTime = 
                !filters.matchesCookingTime ||
                recipe.cookingTime <= filters.maxCookingTime;

            const matchesIngredients =
                filters.requiredIngredients.length === 0 ||
                filters.requiredIngredients.every(ingredient =>
                    recipe.ingredients.includes(ingredient)
                );

            const matchesDifficulty = 
                !filters.difficulty ||
                recipe.difficulty === filters.difficulty;

            return matchesSearch && matchesCookingTime && matchesIngredients && matchesDifficulty;
        });
    },

    addRecipe:(newRecipe) => set(state => ({
    recipes:[...state.recipes, newRecipe]
    })),

    updateRecipe:(id, updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map(recipe =>
                recipe.id === id ? {...recipe, ...updatedRecipe } : recipe
            ),
    })),

    deleteRecipe: (id) =>
        set((state) => ({
            recipes:state.recipes.filter(recipe => recipe.id !== id),
        })),

    setRecipes: (recipes) => set({ recipes 
    })

}));

export default useRecipeStore;