import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/routes';

const App: React.FC = () => {
  return (
      <RouterProvider router={router} />  
  );
};

export default App;

