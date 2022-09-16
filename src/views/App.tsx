import { ReactElement } from "react";
import Router from "@router/index";
import { RouterProvider } from "react-router";

function App(): ReactElement {
  return <RouterProvider router={Router} />;
}

export default App;
