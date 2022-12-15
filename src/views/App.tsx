import { FC, ReactElement, Suspense } from "react";
import Router from "@router/index";
import { RouterProvider } from "react-router";
import Loading from "@components/Loading";

const App: FC = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={Router} />;
    </Suspense>
  );
};

export default App;
