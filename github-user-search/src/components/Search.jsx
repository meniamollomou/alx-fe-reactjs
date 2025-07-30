import { useState } from 'react';
import { fetchAdvancedSearchResults, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);
    setSingleUser(null);

    try {
      if (!location && !minRepos) {
        // Basic user search
        const userData = await fetchUserData(username);
        setSingleUser(userData);
      } else {
        // Advanced search
        const data = await fetchAdvancedSearchResults(username, location, minRepos);
        setResults(data.items); // GitHub returns { total_count, items: [...] }
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full px-4 py-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repos"
          className="w-full px-4 py-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">Looks like we cant find the user</p>}

      {/* Basic single user result */}
      {singleUser && (
        <div className="mt-6 flex items-center space-x-4 p-4 border rounded shadow">
          <img src={singleUser.avatar_url} alt={singleUser.login} className="w-16 h-16 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">{singleUser.name || singleUser.login}</h3>
            <a
              href={singleUser.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}

      {/* Advanced multiple users result */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 p-4 border rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
