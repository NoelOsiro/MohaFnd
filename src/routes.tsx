import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/layout";
import Dash from "./Pages/Dashboard/Dash";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Team from "./Pages/Team/Team";
import Patients from "./Pages/Customers/Patients";
import Appts from "./Pages/Appointments/Appts";
import Payments from "./Pages/Payments/Payments";
import Profile from "./Pages/Account/Profile";
import Notifs from "./Pages/Account/Notifs";
import Messages from "./Pages/Account/Messages";
import Tasks from "./Pages/Account/Tasks";
import ViewAppts from "./Pages/Appointments/ViewAppts";
import BookAppts from "./Pages/Appointments/BookAppts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Dash />,
        }
      ],
    },
    {
      path: "/staff/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "roster",
          element: <Team />,
        },
      ],
    },
    {
      path: "/customers/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "patients",
          element: <Patients />,
        },
        {
          path: "records",
          element: <Patients />,
        },
      ],
    },
    {
      path: "/appointments/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "view",
          element: <ViewAppts />,
        },
        {
          path: "book",
          element: <BookAppts />,
        },
        {
          path: "reschedule",
          element: <Appts />,
        },
      ],
    },
    {
      path: "/payments/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "overview",
          element: <Payments />,
        },
        {
          path: "insurance",
          element: <Payments />,
        },
        {
          path: "make",
          element: <Payments />,
        }
      ],
    },
    {
      path: "/account/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "billing",
          element: <Dash />,
        },
        {
          path: "notifications",
          element: <Notifs />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "alerts",
          element: <Notifs />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
      ],
    },
  ]);