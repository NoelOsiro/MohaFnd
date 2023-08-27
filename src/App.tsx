import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/routes';
import { AuthProvider } from './Context/AuthContext';
import { RegisterProvider } from './Context/RegisterContext';



const App: React.FC = () => {
  return (
    <AuthProvider>
      <RegisterProvider>
        <RouterProvider router={router} />
      </RegisterProvider>

    </AuthProvider>

  );
};

export default App;

