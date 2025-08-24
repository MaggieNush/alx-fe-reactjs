import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { ProfileLayout } from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/dashboard">Dashboard</Link> | 
          <Link to="/profile">Profile</Link> | 
          <Link to="/blog/1">Sample Blog</Link> |
          <AuthButtons />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/profile/*" element={
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          } />
          
          <Route path="/blog/:id" element={<BlogPost />} />
          
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const AuthButtons = () => {
  const { isAuthenticated, login, logout } = useAuth();
  
  return isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
  );
};

export default App;