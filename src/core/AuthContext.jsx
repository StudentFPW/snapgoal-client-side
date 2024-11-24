import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


// Создаем контекст
const AuthContext = createContext();

// Провайдер контекста
export const AuthProvider = ({ children }) => {
  // Задаем роль в состоянии (по умолчанию 'user')
  const [role, setRole] = useState('admin');

  // Функция для изменения роли
  const switchRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <AuthContext.Provider value={{ role, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
