import { FC, ReactElement } from "react";
import Router from "@router/index";
import { RouterProvider } from "react-router";

const App: FC = (): ReactElement => <RouterProvider router={Router} />;

export default App;
