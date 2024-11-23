import { useAuth } from '../core/AuthContext';

const UserPage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>UserPage</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserPage;
