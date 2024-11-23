import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import UserPage from '../pages/UserPage';
import AdminPage from '../pages/AdminPage';
import ShopPage from '../pages/ShopPage';
import App from '../App';
import { useAuth } from '../core/AuthContext';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop" element={<ShopPage />} />

        {/* Private routes for users */}
        <Route
          path="/user"
          element={user && user.role === 'user' ? <UserPage /> : <Navigate to="/auth" />}
        />

        {/* Public routes for admins */}
        <Route
          path="/admin"
          element={user && user.role === 'admin' ? <AdminPage /> : <Navigate to="/auth" />}
        />

        {/* Redirect for /auth по */}
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
