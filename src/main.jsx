import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "material-icons/iconfont/material-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHomePage from "./Component/UserHomePage/UserHomePage.jsx";
import {
  Setting,
  SettingPassword,
  SettingProfile,
  Dashboard,
  Mock,
} from "./Page";
import ActivityPage from "./Component/UserHomePage/ActivityPage.jsx";
import Home from "./Component/Home.jsx";
import Contact from "./Component/Contact.jsx";
import Aboutus from "./Component/Aboutus.jsx";
import AdminPage from "./Page/members/adminpage.jsx";
import Login from "./Page/login.jsx";
import Signup from "./Page/members/signup.jsx";
import ForgotPassword from "./Page/members/forgotpassword.jsx";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
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
  {
    path: "/setting/profile",
    element: <SettingProfile />,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Activity",
    element: <ActivityPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  { path: "/mock", element: <Mock /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </SnackbarProvider>

);
