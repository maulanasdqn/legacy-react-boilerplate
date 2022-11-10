import { ReactElement, FC } from "react";
import Guest from "@modules/Auth/Middleware/Guest";
import RegisterContent from "@modules/Auth/Register/Content";

const Register: FC = (): ReactElement => {
  return (
    <Guest>
      <RegisterContent />
    </Guest>
  );
};

export default Register;
