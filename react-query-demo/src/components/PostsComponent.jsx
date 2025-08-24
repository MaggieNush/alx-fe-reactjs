import { useQuery } from '@tanstack/react-query';

// API fetch function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  // Enhanced useQuery with additional configuration options
  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch, 
    isFetching 
  } = useQuery({
    queryKey: ['posts'], // Unique key for caching
    queryFn: fetchPosts,
    
    // Configuration options
    staleTime: 1000 * 60 * 5,    // Data stays fresh for 5 minutes
    cacheTime: 1000 * 60 * 10,   // The length inactive data stays in cache
    refetchOnWindowFocus: true,  // Refetch when window gains focus
    keepPreviousData: true,      // Keep previous data while fetching new data
  });

  // Loading state
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      
      {/* Refresh button */}
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>

      {/* Show loading indicator during background refresh */}
      {isFetching && <div>Updating posts...</div>}

      {/* Display posts */}
      <div>
        {data?.slice(0, 10).map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;