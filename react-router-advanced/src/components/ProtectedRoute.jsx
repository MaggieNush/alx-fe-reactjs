import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the auth context
  
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;