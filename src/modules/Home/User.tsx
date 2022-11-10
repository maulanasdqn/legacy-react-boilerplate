import useUserCredentials from "@hooks/Users/useUserCredentials";
import { FC, ReactElement } from "react";

const User: FC = (): ReactElement => {
  const userData = useUserCredentials();
  return <h1>Hallo {userData.map((x) => x.fullname)}</h1>;
};

export default User;
