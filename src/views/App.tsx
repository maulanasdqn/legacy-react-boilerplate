import { FC, ReactElement, Suspense } from "react";
import Router from "@router/index";
import { RouterProvider } from "react-router";

const App: FC = (): ReactElement => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={Router} />;
    </Suspense>
  )
}

export default App;
