import React, { useState, useEffect } from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm)

    // small delay to avoid too many re-renders
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(localSearchTerm)
        }, );

        return () => clearTimeout(timer);
    }, [localSearchTerm, setSearchTerm]);

    return (
      <div className="search-bar">
        <input 
        type="text" 
        placeholder="Search for recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="search-bar-icon">🔍</span>
      </div>
    );
};

export default SearchBar;