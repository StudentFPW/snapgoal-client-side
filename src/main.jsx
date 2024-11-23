import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { AuthProvider } from './core/AuthContext';
import AppRoutes from './core/Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>
);
