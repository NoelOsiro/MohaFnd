import React, { createContext, useContext, useState } from 'react';

interface User {
  email: string;
  _id: string;
  phone: string;
  address: string;
  sex: string;
  role: string;
  verified: boolean,
  token:string;
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

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        const userFromApi = data.userResponse;
        setUser(userFromApi);
        localStorage.setItem('user', JSON.stringify(userFromApi));
      } else {
        if (data.error === 'Invalid credentials') {
          // Show error message to user
        } else if (data.error === 'Email not verified') {
          // Show error message to user
        } else {
          // Handle other error cases
        }
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
      // Show error message to user
    }
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
