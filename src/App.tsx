import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes';
Amplify.configure(awsExports);



const App: React.FC = () => {
  return (
    <RouterProvider router={router}/> 
  );
};

export default withAuthenticator(App);

