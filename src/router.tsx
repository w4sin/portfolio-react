import { createHashRouter, Navigate } from "react-router";

import Home from "./pages/home";
import NotFoundPage from "./pages/not-found";

const router = createHashRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Navigate to="/home" /> },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "*",
        element: <Navigate to="/page-not-found" />,
      },
      {
        path: "/page-not-found",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
