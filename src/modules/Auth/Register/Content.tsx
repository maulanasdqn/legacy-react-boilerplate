import { Register } from "@store/Auth/Register/selectors";
import { URL_PATH } from "@util/constant";
import { useNavigate } from "react-router-dom";
import { useRecoilCallback } from "recoil";
import { FC, ReactElement, useEffect, useState, lazy, Suspense, FormEventHandler } from "react";
import { messageParser } from "@util/helper";

const Form = lazy(() => import("@modules/Common/Form"));
const AuthCheckBox = lazy(() => import("@modules/Auth/Common/AuthCheckBox"));
const AuthFooter = lazy(() => import("@modules/Auth/Common/AuthFooter"));
const RegisterTextField = lazy(() => import("@modules/Auth/Register/RegisterTextField"));
const AuthLayout = lazy(() => import("@layouts/Auth"));

const RegisterContent: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const RegisterAction: FormEventHandler<HTMLFormElement> = useRecoilCallback(
    ({ snapshot }) =>
      async (event) => {
        event.preventDefault();
        try {
          setLoading(true);
          await snapshot.getPromise(Register);
          navigate(URL_PATH.LOGIN, { replace: true });
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
    <Suspense fallback="Loading...">
      <AuthLayout error={errorMessage} text="Register Your Account">
        <Form onSubmit={RegisterAction} className="space-y-4 md:space-y-6 flex flex-col">
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
            buttonLabel={loading ? "Registering..." : "Sign Up"}
          />
        </Form>
      </AuthLayout>
    </Suspense>
  );
};

export default RegisterContent;
