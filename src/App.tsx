import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from './Components/PageLoader/Loader';
import Layout from './Layout/layout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';


// Lazy-loaded components
const LandingPage = lazy(() => import('./Pages/Auth/LandingPage'));
const Dash = lazy(() => import('./Pages/Dashboard/Dash'));
const Team = lazy(() => import('./Pages/Team/Team'));
const Patients = lazy(() => import('./Pages/Tenants/Tenants'));
const ViewAppts = lazy(() => import('./Pages/Appointments/ViewAppts'));
const BookAppts = lazy(() => import('./Pages/Appointments/BookAppts'));
// const Appts = lazy(() => import('./Pages/Appointments/Appts'));
const Payments = lazy(() => import('./Pages/Payments/Payments'));
const Profile = lazy(() => import('./Pages/Account/Profile'));
const Messages = lazy(() => import('./Pages/Account/Messages'));
const Notifs = lazy(() => import('./Pages/Account/Notifs'));
const Tasks = lazy(() => import('./Pages/Account/Tasks'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<PageLoader />}><LandingPage /></Suspense>} />
      <Route path="/dashboard" element={<Suspense fallback={<PageLoader />}><Dash /></Suspense>} />
      <Route path="/staff" element={<Suspense fallback={<PageLoader />}><Team /></Suspense>} />
      <Route path="/staff/roster" element={<Suspense fallback={<PageLoader />}><Team /></Suspense>} />
      <Route path="/tenants" element={<Suspense fallback={<PageLoader />}><Patients /></Suspense>} />
      <Route path="/tenants/records" element={<Suspense fallback={<PageLoader />}><Patients /></Suspense>} />
      <Route path="/property/view" element={<Suspense fallback={<PageLoader />}><ViewAppts /></Suspense>} />
      <Route path="/property/lease" element={<Suspense fallback={<PageLoader />}><BookAppts /></Suspense>} />
      <Route path="/payments/overview" element={<Suspense fallback={<PageLoader />}><Payments /></Suspense>} />
      <Route path="/accounts/profile" element={<Suspense fallback={<PageLoader />}><Profile /></Suspense>} />
      <Route path="/services/request" element={<Suspense fallback={<PageLoader />}><Dash /></Suspense>} />
      <Route path="/accounts/owners" element={<Suspense fallback={<PageLoader />}><Notifs /></Suspense>} />
      <Route path="/accounts/managers" element={<Suspense fallback={<PageLoader />}><Messages /></Suspense>} />
      <Route path="/contactors" element={<Suspense fallback={<PageLoader />}><Tasks /></Suspense>} />
      <Route path="/callback" element={<Layout children />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
