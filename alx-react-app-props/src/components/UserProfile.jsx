import { useContext } from 'react';
import UserContext from '../UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext); // Context consumed here
  
  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo userData={userData} /> {/* Still pass as prop for demonstration */}
    </div>
  );
}

export default UserProfile;