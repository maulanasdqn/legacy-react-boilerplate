import { Register } from "@store/Auth/Register/selectors";
import { URL_PATH } from "@util/constant";
import { messageParser } from "@util/helper";
import { useNavigate } from "react-router-dom";
import { useRecoilCallback } from "recoil";
import { FC, FormEvent, ReactElement, useEffect, useState, lazy, Suspense } from "react";
import AuthLayout from "@layouts/Auth";

const RegisterContent: FC = (): ReactElement => {
  const Form = lazy(() => import("@modules/Common/Form"));
  const AuthCheckBox = lazy(() => import("@modules/Auth/Common/AuthCheckBox"));
  const AuthFooter = lazy(() => import("@modules/Auth/Common/AuthFooter"));
  const RegisterTextField = lazy(() => import("@modules/Auth/Register/RegisterTextField"));

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const RegisterAction = useRecoilCallback(({ snapshot }) => async () => {
    try {
      await snapshot.getPromise(Register);
      navigate(URL_PATH.LOGIN, { replace: true });
    } catch (e) {
      setErrorMessage(messageParser(e));
    }
  });

  const handleRegister = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    RegisterAction();
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  });

  return (
    <AuthLayout error={errorMessage} text="Register Your Account">
      <Suspense fallback="Loading...">
        <Form
          onSubmit={(event) => handleRegister(event)}
          className="space-y-4 md:space-y-6 flex flex-col"
        >
          <RegisterTextField />
          <AuthCheckBox
            label="Agree terms and conditions"
            subLabel="Forgot Password"
            value={""}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <AuthFooter
            url={URL_PATH.LOGIN}
            label="Already have an account?"
            subLabel="Sign In"
            buttonLabel="Sign Up"
          />
        </Form>
      </Suspense>
    </AuthLayout>
  );
};

export default RegisterContent;
