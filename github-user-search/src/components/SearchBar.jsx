import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      alert("Please enter a username");
      return;
    }

    onSearch(inputValue.trim());
    setInputValue('');
  };

  return (
    <div className="flex justify-center mt-10">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Search a GitHub username:
        </label>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g. maggie-nush"
            className="border border-solid-gray-300 rounded px-4 py-2 outline-offset-2 focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
