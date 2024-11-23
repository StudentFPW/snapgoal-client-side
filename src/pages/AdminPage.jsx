import { useAuth } from '../core/AuthContext';

const AdminPage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>AdminPage</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminPage;
