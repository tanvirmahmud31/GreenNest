import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  return (
    <Navigate 
      to="/auth/login" 
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRouter;
