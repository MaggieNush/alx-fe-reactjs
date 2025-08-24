import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { ProfileLayout } from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/blog/1">Sample Blog</Link> |
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
        
        {/* Dynamic Route - Fixed to use :id parameter */}
        <Route path="/blog/:id" element={<BlogPost />} />
        
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;