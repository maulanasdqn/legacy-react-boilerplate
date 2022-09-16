import { ReactElement, FC } from "react";
import BaseLayouts from "@layouts/Base";
import { setTitle } from "@util/helper/index.helper";
import { useRecoilState, useRecoilValue } from "recoil";
import { isAuthenticated } from "@store/auth";
import { Link } from "react-router-dom";
import { show } from "@store/common";

const About: FC = (): ReactElement => {
  const isAuth = useRecoilValue(isAuthenticated);
  const [isShow, setShow] = useRecoilState(show);
  setTitle("About");
  return (
    <BaseLayouts>
      <section className="flex flex-col gap-y-4">
        <Link to={"/"}>Home</Link>
        <h1 className="text-black-900 font-sans text-4xl text-center">About React Boilerplate</h1>
        <h1 className="font-bold text-3xl cursor-pointer" onClick={() => setShow(!isShow)}>
          Click to {!isShow ? "Open" : "Close"} Information{" : "}
          {isShow
            ? isAuth
              ? "The information is you Amazing"
              : "You Need to login to view this information"
            : "Locked"}
        </h1>
      </section>
    </BaseLayouts>
  );
};

export default About;
