import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { ProfileLayout } from './components/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/blog/post-1">Sample Blog</Link> |
        <button onClick={() => localStorage.setItem('isAuthenticated', 'true')}>
          Simulate Login
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Protected Route with Nested Routes */}
        <Route path="/profile/*" element={
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        } />
        
        {/* Dynamic Route */}
        <Route path="/blog/:postId" element={<BlogPost />} />
        
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;