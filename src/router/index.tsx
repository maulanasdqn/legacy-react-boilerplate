import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@views/home"));
const Register = lazy(() => import("@views/Auth/Register"));
const Login = lazy(() => import("@views/Auth/Login"));

const Router = createBrowserRouter([
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "auth/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Home />,
  },
  {
    path: "/",
    element: "Welcome",
  },
]);

export default Router;
