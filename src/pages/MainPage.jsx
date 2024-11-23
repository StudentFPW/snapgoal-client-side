import { useAuth } from '../core/AuthContext';

const MainPage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>MainPage</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default MainPage;
