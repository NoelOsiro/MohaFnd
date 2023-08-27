import React, { createContext, useContext } from 'react';

interface RegisterContextType {
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    phone: string,
    address: string,
    sex: string,
    role: string
  ) => Promise<boolean>; // Return a boolean indicating success/failure
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error('useRegister must be used within a RegisterProvider');
  }
  return context;
};

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    phone: string,
    address: string,
    sex: string,
    role: string
  ) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, username, email, password, phone, address, sex, role }),
      });
      const responseData = await response.json();

      if (response.ok) {
        // Registration was successful
        return true;
      }
      else {
        throw new Error(responseData.error);
      } 
    } catch (error) {
      throw new Error('Sign Up error');
    }
  };

  const contextValue: RegisterContextType = {
    register,
  };

  return (
    <RegisterContext.Provider value={contextValue}>{children}</RegisterContext.Provider>
  );
};
