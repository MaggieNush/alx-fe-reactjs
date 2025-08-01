import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async(username) => {
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      setError("Sorry, user not found")
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className='flex justify-center'>
      <h1>Search Github User</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>{user.name}({user.login})</h2>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <p>{user.bio}</p>
          <p>Followers: {user.followers} | Following: {user.following}</p>
          <p>Public repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
          
        </div>
      )}
    </div>
  )
}

export default App;