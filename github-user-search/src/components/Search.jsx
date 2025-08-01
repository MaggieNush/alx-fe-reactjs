import React, { useState } from 'react';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      alert("Please enter a username");
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${inputValue.trim()}`);
      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setErrorMsg("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }

    setInputValue('');
  };

  return (
    <div className="flex flex-col items-center mt-10">
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
            className="border border-gray-300 rounded px-4 py-2 outline-offset-2 focus:ring-2 focus:ring-purple-400 w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}

      {errorMsg && <p className="mt-4 text-red-600">{errorMsg}</p>}

      {userData && (
        <div className="mt-6 bg-white p-4 rounded shadow-md text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <p className="mt-2 text-lg font-semibold">{userData.login}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
