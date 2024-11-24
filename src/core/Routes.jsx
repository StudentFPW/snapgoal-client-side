import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import RewardsPage from '../pages/RewardsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/main" element={<MainPage />} />
        {/* Redirect for /auth */}
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
