// githubService.js
export async function fetchUserData({ username, location, minRepos }) {
  try {
    let queryParts = [];

    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join(' ');
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    return data.items || [];
  } catch (error) {
    throw new Error('Something went wrong. Please try again later.');
  }
}
