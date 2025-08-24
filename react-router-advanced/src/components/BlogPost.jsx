import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Changed from postId to id
  
  // Simulate blog posts data
  const posts = {
    '1': { title: 'My Life as a Developer', content: 'This is a brief overview of my life as a developer.' },
    '2': { title: 'A Day in the Life of a Software Engineer', content: 'This is a brief overview of a day in the life of a software engineer.' },
    '3': { title: 'Understanding React Router', content: 'This is a brief overview of understanding React Router.' }
  };

  const post = posts[id];

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
        {Object.keys(posts).map(postId => (
          postId !== id && (
            <Link key={postId} to={`/blog/${postId}`} style={{ display: 'block', margin: '5px 0' }}>
              {posts[postId].title}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default BlogPost;