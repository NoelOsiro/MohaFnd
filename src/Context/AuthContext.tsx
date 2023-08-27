import React, { createContext, useContext, useState } from 'react';

interface User {
  email: string;
  // Other user properties
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Call your login API here and set the user state if successful
    const userFromApi = { email }; // Replace with actual API call
    setUser(userFromApi);
    localStorage.setItem('user', JSON.stringify(userFromApi));
  };

  const logout = () => {
    // Perform logout actions and clear the user state
    setUser(null);
    localStorage.removeItem('user');
  };

  // You can also add other auth-related functions here

  const contextValue: AuthContextType = {
    user,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
