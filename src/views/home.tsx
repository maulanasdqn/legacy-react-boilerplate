import { ReactElement, FC } from "react";
import BaseLayouts from "@layouts/Base";
import { setTitle } from "@util/helper/index.helper";
import { useRecoilState } from "recoil";
import { isAuthenticated } from "@store/auth";
import { Link } from "react-router-dom";

const Home: FC = (): ReactElement => {
  const [isAuth, setAuth] = useRecoilState(isAuthenticated);

  setTitle("Home");
  return (
    <BaseLayouts>
      <section className="flex flex-col gap-y-4">
        <Link to={"/about"}>About</Link>
        <h1 className="text-black-900 font-sans text-4xl text-center">React Boilerplate</h1>
        <h1 className="font-bold text-3xl">{isAuth ? "Succes Login" : "You Need to login"}</h1>
        <h1 className="cursor-pointer" onClick={() => setAuth(!isAuth)}>
          Cick to {isAuth ? "Logout" : "Login"}
        </h1>
      </section>
    </BaseLayouts>
  );
};

export default Home;
