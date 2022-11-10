import { createBrowserRouter } from "react-router-dom";
import Login from "@views/Auth/Login";
import Home from "@views/home";
import Register from "@views/Auth/Register";

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
