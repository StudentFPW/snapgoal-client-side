import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import ShopPage from '../pages/ShopPage';
import App from '../App';
// import { useAuth } from '../core/AuthContext';

const AppRoutes = () => {
  // const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop" element={<ShopPage />} />

        <Route
          path="/main"
          element={<MainPage/>}
        />

        {/* Redirect for /auth по */}
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
