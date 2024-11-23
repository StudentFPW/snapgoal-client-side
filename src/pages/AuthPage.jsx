import { useAuth } from '../core/AuthContext';

const AuthPage = () => {
  const { login } = useAuth();

  const handleLoginAsUser = () => {
    login({ username: 'user', role: 'user' });
  };

  const handleLoginAsAdmin = () => {
    login({ username: 'admin', role: 'admin' });
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={handleLoginAsUser}>User</button>
      <button onClick={handleLoginAsAdmin}>Admin</button>
    </div>
  );
};

export default AuthPage;
