import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  authKey: string;
  redirectTo: string;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ 
  children, 
  authKey, 
  redirectTo 
}) => {
  const isAuthenticated = localStorage.getItem(authKey) === 'true';

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};