import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "material-icons/iconfont/material-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHomePage from "./Component/UserHomePage/UserHomePage.jsx";
import { Setting, SettingPassword } from "./Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/UserHomePage",
    element: <UserHomePage />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/setting/password",
    element: <SettingPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
