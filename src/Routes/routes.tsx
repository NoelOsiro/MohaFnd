import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";
import Dash from "../Pages/Dashboard/Dash";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Team from "../Pages/Team/Team";
import Patients from "../Pages/Customers/Patients";
import Appts from "../Pages/Appointments/Appts";
import Payments from "../Pages/Payments/Payments";
import Profile from "../Pages/Account/Profile";
import Notifs from "../Pages/Account/Notifs";
import Messages from "../Pages/Account/Messages";
import Tasks from "../Pages/Account/Tasks";
import ViewAppts from "../Pages/Appointments/ViewAppts";
import BookAppts from "../Pages/Appointments/BookAppts";
import { AuthenticationGuard } from "./PrivateRoute";
import LandingPage from "../Pages/Auth/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/callback",
    element: <Layout/>
  },
  
  
]);