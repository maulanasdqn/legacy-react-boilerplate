import { Login } from "@store/Auth/Login/selectors";
import { URL_PATH } from "@util/constant";
import { messageParser } from "@util/helper";
import { FC, FormEventHandler, lazy, ReactElement, Suspense, useState, useEffect } from "react";
import { useRecoilCallback } from "recoil";

const Form = lazy(() => import("@modules/Common/Form"));
const AuthCheckBox = lazy(() => import("@modules/Auth/Common/AuthCheckBox"));
const AuthFooter = lazy(() => import("@modules/Auth/Common/AuthFooter"));
const LoginTextField = lazy(() => import("@modules/Auth/Login/LoginTextField"));
const AuthLayout = lazy(() => import("@layouts/Auth"));

const LoginContent: FC = (): ReactElement => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const LoginAction: FormEventHandler<HTMLFormElement> = useRecoilCallback(
    ({ snapshot }) =>
      async (event) => {
        event.preventDefault();
        try {
          setLoading(true);
          await snapshot.getPromise(Login);
          setLoading(false);
        } catch (e) {
          setLoading(false);
          setErrorMessage(messageParser(e));
        }
      },
  );

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  });

  return (
    <Suspense fallback="Memuat Form...">
      <AuthLayout error={errorMessage} text="Sign To Your Account">
        <Form onSubmit={LoginAction} className="space-y-4 md:space-y-6 flex flex-col">
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
            buttonLabel={loading ? "Loading..." : "Sign In"}
          />
        </Form>
      </AuthLayout>
    </Suspense>
  );
};

export default LoginContent;
