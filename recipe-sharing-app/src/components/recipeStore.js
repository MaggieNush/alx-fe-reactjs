import { create } from "zustand";

const useRecipeStore = create (set => ({
    recipes:[],
    searchTerm: (term) => set({searchTerm: term}),
    filteredRecipes: [],
    filteredRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
    
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