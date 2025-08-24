import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams(); // Get dynamic parameter
  
  // Simulate blog posts data
  const posts = {
    'post-1': { title: 'First Post', content: 'This is the first blog post.' },
    'post-2': { title: 'Second Post', content: 'This is the second blog post.' },
    'post-3': { title: 'Third Post', content: 'This is the third blog post.' }
  };

  const post = posts[postId];

  if (!post) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      
      {/* Navigation to other posts */}
      <div style={{ marginTop: '20px' }}>
        <h4>Other Posts:</h4>
        {Object.keys(posts).map(id => (
          id !== postId && (
            <Link key={id} to={`/blog/${id}`} style={{ display: 'block', margin: '5px 0' }}>
              {posts[id].title}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default BlogPost;