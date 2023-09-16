import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";


export const router = createBrowserRouter([
  {
    path: "/callback",
    element: <Layout children={undefined}/>
  },
  
  
]);