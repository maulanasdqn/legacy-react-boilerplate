import { setTitle } from "@util/helper/index";
import { ReactElement, FC, Suspense } from "react";
import Auth from "@modules/Auth/Middleware/Auth";
import BaseLayouts from "@layouts/Base";
import User from "@modules/Home/User";
import AuthService from "@service/Auth";

const Home: FC = (): ReactElement => {
  setTitle("Home");

  const handleLogout = (): void => {
    AuthService.Logout();
  };

  return (
    <Auth>
      <BaseLayouts>
        <section className="flex flex-col gap-y-4">
          <h1 className="text-xl font-bold">Welcome Your Authenticated Now</h1>
          <Suspense fallback="Loading..">
            <User />
          </Suspense>
          <button
            onClick={handleLogout}
            className="text-red-500 border-2 border-red-500 rounded-lg w-auto p-3 h-auto"
          >
            Logout
          </button>
        </section>
      </BaseLayouts>
    </Auth>
  );
};

export default Home;
