import { create } from "zustand";

const useRecipeStore = create (set => ({
    recipes:[],
    favorites:[],
    
    addFavorite:(recipeId) => set(state => ({
        favorites:[...state.favorites, recipeId]
    })),

    removeFavorite:(recipeId) => set(state => ({
        favorites:state.favorites.filter(id => id !== recipeId)
    })),

    recommendations:[],

generateRecommendations: () => set((state) => {
  if (state.favorites.length === 0) {
    const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
    return { recommendations: shuffled.slice(0, 3) };
  }

  const favoriteIngredients = Array.from(
    new Set(
      state.favorites.flatMap(favId => {
        const recipe = state.recipes.find(r => r.id === favId);
        return recipe ? recipe.ingredients : [];
      })
    )
  );

  const scoredRecipes = state.recipes
    .filter(recipe => !state.favorites.includes(recipe.id)) // Exclude already favorited
    .map(recipe => {
      let score = 0;
      
      const ingredientMatches = recipe.ingredients.filter(ingredient =>
        favoriteIngredients.includes(ingredient)
      ).length;
      score += ingredientMatches * 2;
      
      const avgFavoriteTime = state.favorites.reduce((sum, favId) => {
        const favRecipe = state.recipes.find(r => r.id === favId);
        return sum + (favRecipe?.cookingTime || 0);
      }, 0) / state.favorites.length;
      
      score += 5 - Math.abs(recipe.cookingTime - avgFavoriteTime) / 10;
      
      // Score for matching difficulty
      const favoriteDifficulties = state.favorites.map(favId => {
        const favRecipe = state.recipes.find(r => r.id === favId);
        return favRecipe?.difficulty;
      });
      
      if (favoriteDifficulties.includes(recipe.difficulty)) {
        score += 3;
      }
      
      return { ...recipe, score };
    })
    .sort((a, b) => b.score - a.score);

  return { recommendations: scoredRecipes.slice(0, 6) };
}),

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