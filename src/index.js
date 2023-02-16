import React from "react";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import settings from "@salesforce/design-system-react/components/settings";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Exchanges from "./pages/Exchanges";
import Defi from "./pages/Defi";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
settings.setAppElement(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/defi",
        element: <Defi />,
      },
      {
        path: "/exchanges",
        element: <Exchanges />,
      },
    ],
  },
]);

root.render(
  <IconSettings iconPath="/assets/icons">
    <RouterProvider router={router} />
  </IconSettings>
);
