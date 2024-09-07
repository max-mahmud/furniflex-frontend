import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ redirectTo }) => {
  const { isAuthenticated, loading } = useAuth();
  console.log("Is user authenticated?", isAuthenticated);

  // If still loading, show nothing or a loading spinner
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner if needed
  }

  // If the user is not authenticated, redirect them to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
