import { Login } from "@store/Auth/Login/selectors";
import { URL_PATH } from "@util/constant";
import { messageParser } from "@util/helper";
import { FC, FormEvent, lazy, ReactElement, Suspense, useEffect, useState } from "react";
import { useRecoilCallback } from "recoil";
import AuthLayout from "@layouts/Auth";

const LoginContent: FC = (): ReactElement => {
  const Form = lazy(() => import("@modules/Common/Form"));
  const AuthCheckBox = lazy(() => import("@modules/Auth/Common/AuthCheckBox"));
  const AuthFooter = lazy(() => import("@modules/Auth/Common/AuthFooter"));
  const LoginTextField = lazy(() => import("@modules/Auth/Login/LoginTextField"));

  const [errorMessage, setErrorMessage] = useState("");

  const LoginAction = useRecoilCallback(({ snapshot }) => async () => {
    try {
      await snapshot.getPromise(Login);
    } catch (e) {
      setErrorMessage(messageParser(e));
    }
  });

  const handleLogin = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    LoginAction();
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  });

  return (
    <AuthLayout error={errorMessage} text="Sign To Your Account">
      <Suspense fallback="Loading...">
        <Form
          onSubmit={(event) => handleLogin(event)}
          className="space-y-4 md:space-y-6 flex flex-col"
        >
          <LoginTextField />
          <AuthCheckBox
            value=""
            label="Remember Me"
            subLabel="Forgot Password"
            required={false}
            onChange={(e) => console.log(e.target.value)}
          />
          <AuthFooter
            url={URL_PATH.REGISTER}
            label="Dont have an account?"
            subLabel="Sign Up"
            buttonLabel="Sign In"
          />
        </Form>
      </Suspense>
    </AuthLayout>
  );
};

export default LoginContent;
