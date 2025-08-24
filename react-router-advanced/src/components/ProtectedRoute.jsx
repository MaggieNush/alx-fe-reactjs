import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Simulate authentication - in real app, check from context/store
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;