import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: ''
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await fetchUserData(formData);
      setUsers(data);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Filter GitHub Users
        </label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="mb-2 w-full border rounded px-4 py-2"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="mb-2 w-full border rounded px-4 py-2"
        />

        <input
          type="number"
          name="minRepos"
          value={formData.minRepos}
          onChange={handleChange}
          placeholder="Minimum Repos"
          className="mb-4 w-full border rounded px-4 py-2"
        />

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>

        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">Looks like we cant find the user</p>}

        {users.length > 0 && (
          <div className="mt-6 space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center gap-4 p-2 border rounded shadow-sm">
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                <a href={user.html_url} target="_blank" rel="noreferrer" className="text-purple-600 font-bold">
                  {user.login}
                </a>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default Search;
