import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";import Layout from './Layout/layout';
import Dash from './Pages/Dashboard/Dash';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import { router } from './routes';
Amplify.configure(awsExports);



const App: React.FC = () => {
  return (
    <RouterProvider router={router}/> 
  );
};

export default withAuthenticator(App);

