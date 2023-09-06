import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { PageLoader } from './Components/PageLoader/Loader';
import Dash from './Pages/Dashboard/Dash';
import Team from './Pages/Team/Team';
import LandingPage from './Pages/Auth/LandingPage';
import Patients from './Pages/Customers/Patients';
import ViewAppts from './Pages/Appointments/ViewAppts';
import BookAppts from './Pages/Appointments/BookAppts';
import Appts from './Pages/Appointments/Appts';
import Payments from './Pages/Payments/Payments';
import Profile from './Pages/Account/Profile';
import Layout from './Layout/layout';
import Messages from './Pages/Account/Messages';
import Notifs from './Pages/Account/Notifs';
import Tasks from './Pages/Account/Tasks';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dash />} />
      <Route path="/staff/team" element={<Team />}/>
      <Route path="/staff/roster" element={<Team />}/>
      <Route path="/customers/patients" element={<Patients />} />
      <Route path="/customers/records" element={<Patients />}/>
      <Route path="/appointments/view" element={<ViewAppts />}/>
      <Route path="/appointments/book" element={<BookAppts />}/>
      <Route path="/appointments/reschedule" element={<Appts />}/>
      <Route path="/payments/overview" element={<Payments />}/>
      <Route path="/appointments/insurance" element={<Payments />}/>
      <Route path="/appointments/make" element={<Payments />}/>
      <Route path="/appointments/reschedule" element={<Appts />}/>
      <Route path="/appointments/reschedule" element={<Appts />}/>
      <Route path="/accounts/profile" element={<Profile />}/>
      <Route path="/accounts/billing" element={<Dash />}/>
      <Route path="/accounts/notifications" element={<Notifs />}/>
      <Route path="/accounts/messages" element={<Messages />}/>
      <Route path="/accounts/tasks" element={<Tasks />}/>
      <Route path="/callback" element={<Layout children />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   )
};

export default App;

