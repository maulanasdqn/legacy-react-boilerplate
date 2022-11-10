/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthLayout from "@layouts/Auth";
import Form from "@modules/Common/Form";
import { LoginPayload } from "@store/Auth/Login/atoms";
import { Login } from "@store/Auth/Login/selectors";
import { URL_PATH } from "@util/constant";
import { FC, FormEvent, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilCallback, useRecoilState } from "recoil";

const LoginContent: FC = (): ReactElement => {
  const [payload, setPayload] = useRecoilState(LoginPayload);
  const [errorMessage, setErrorMessage] = useState("");

  const LoginAction = useRecoilCallback(({ snapshot }) => async () => {
    try {
      await snapshot.getPromise(Login);
    } catch (e: any) {
      setErrorMessage(JSON.parse(e));
    }
  });

  const handleLogin = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    LoginAction();
  };

  return (
    <AuthLayout error={errorMessage} text="Sign To Your Account">
      <Form
        onSubmit={(event) => handleLogin(event)}
        className="space-y-4 md:space-y-6 flex flex-col"
      >
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required={true}
          onChange={(e) => setPayload({ ...payload, ["email"]: e.target.value })}
          value={payload["email"]}
        />
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required={true}
          onChange={(e) => setPayload({ ...payload, ["password"]: e.target.value })}
          value={payload["password"]}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required={false}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-blue-400 border-2 border-blue-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mr-2">
          Dont have an account yet?
          <Link
            to={URL_PATH.REGISTER}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
          >
            Sign up
          </Link>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default LoginContent;
