import { createBrowserRouter } from "react-router-dom";
import Home from "@views/home";
import About from "@views/about";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default Router;
