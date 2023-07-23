import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/layout";
import Dash from "./Pages/Dashboard/Dash";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <Dash />,
        },
        {
          path: "staff/team",
          element: <Dash />,
        },
        {
          path: "staff/roster",
          element: <Dash />,
        },
        {
          path: "customer/patients",
          element: <Dash />,
        },
        {
          path: "customer/records",
          element: <Dash />,
        },
        {
          path: "appointments",
          element: <Dash />,
        },
      ],
    },
    {
      path: "/staff/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "team",
          element: <Dash />,
        },
        {
          path: "roster",
          element: <Dash />,
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
          element: <Dash />,
        },
        {
          path: "records",
          element: <Dash />,
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
          element: <Dash />,
        },
        {
          path: "book",
          element: <Dash />,
        },
        {
          path: "reschedule",
          element: <Dash />,
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
          element: <Dash />,
        },
        {
          path: "insurance",
          element: <Dash />,
        },
        {
          path: "make",
          element: <Dash />,
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
          element: <Dash />,
        },
        {
          path: "billing",
          element: <Dash />,
        },
        {
          path: "notifications",
          element: <Dash />,
        },
        {
          path: "messages",
          element: <Dash />,
        },
        {
          path: "alerts",
          element: <Dash />,
        },
        {
          path: "tasks",
          element: <Dash />,
        },
      ],
    },
  ]);