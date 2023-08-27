import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';
import { AuthProvider } from './Context/AuthContext';



const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/> 
    </AuthProvider>
    
  );
};

export default App;

