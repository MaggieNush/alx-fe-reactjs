import React, { useState } from 'react';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      alert("Please enter a username");
      return;
    }
    fetchUserData(inputValue.trim());
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
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition duration-200"
          >
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {userData && (
          <div className="mt-4 text-center">
            <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p className="font-bold">{userData.login}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Search;
