import React, { useEffect, useState } from 'react';
import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify';
import { Button, TextField, View, withAuthenticator, Text, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import {
  SideBar,
  ProfileCard, 
  NavBar
 } from './ui-components';

import awsExports from "./aws-exports";
import  './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import HeaderBar from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Dash from './Pages/Dashboard/Dash';
Amplify.configure(awsExports);


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <HeaderBar />
        <Dash/>
      </div>
    </div>
    </BrowserRouter>
    
  );
};



export default withAuthenticator(App);

