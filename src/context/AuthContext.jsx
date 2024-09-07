import React, { createContext, useState, useEffect } from 'react';
import { login, signup } from '../api/auth';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  const validateToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          setIsAuthenticated(true);
          setUser({ email: decodedToken.email });
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('token');
        }
      } catch (e) {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
      }
    } else {
      console.log("No token found, setting isAuthenticated to false");
      setIsAuthenticated(false);
    }

    setLoading(false); // Set loading to false after validation
  };

  useEffect(() => {
    validateToken();
  }, []);

  const handleLogin = async (email, password) => {
    const data = await login(email, password);
    console.log("Login response data:", data);

    if (data.token) {
      localStorage.setItem('token', data.token);
      validateToken(); // Revalidate after login
    } else {
      throw new Error(data.error);
    }
  };

  const handleSignup = async (email, password, firstName, lastName) => {
    const data = await signup(email, password, firstName, lastName);
    if (!data.error) {
      await handleLogin(email, password);
    } else {
      throw new Error(data.error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    alert('Logout successful');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, handleLogin, handleSignup, handleLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
