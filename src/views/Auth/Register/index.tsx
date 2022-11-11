import { ReactElement, FC } from "react";
import Guest from "@modules/Auth/Middleware/Guest";
import RegisterContent from "@modules/Auth/Register/Content";
import { setTitle } from "@util/helper";

const Register: FC = (): ReactElement => {
  setTitle("Register");
  return (
    <Guest>
      <RegisterContent />
    </Guest>
  );
};

export default Register;
