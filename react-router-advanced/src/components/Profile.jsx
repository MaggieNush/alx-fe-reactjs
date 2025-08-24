import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div>
      <h2>Profile</h2>
      
      {/* Nested Navigation */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="settings" style={{ marginRight: '10px' }}>Settings</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* Nested Routes Container */}
      <div>
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </div>
  );
};

// Profile Layout with nested routes
export const ProfileLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />}>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
};

export default ProfileLayout;