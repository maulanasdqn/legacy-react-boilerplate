import { setTitle } from "@util/helper";
import { ReactElement, FC } from "react";
import Guest from "@modules/Auth/Middleware/Guest";
import RegisterContent from "@modules/Auth/Register/Content";

const Register: FC = (): ReactElement => {
  setTitle("Register");
  return (
    <Guest>
      <RegisterContent />
    </Guest>
  );
};

export default Register;
