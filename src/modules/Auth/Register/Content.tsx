/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthLayout from "@layouts/Auth";
import Form from "@modules/Common/Form";
import { LoginPayload } from "@store/Auth/Login/atoms";
import { Register } from "@store/Auth/Register/selectors";
import { URL_PATH } from "@util/constant";
import { FC, FormEvent, ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilCallback, useRecoilState } from "recoil";

const RegisterContent: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [payload, setPayload] = useRecoilState(LoginPayload);
  const [errorMessage, setErrorMessage] = useState("");

  const RegisterAction = useRecoilCallback(({ snapshot }) => async () => {
    try {
      await snapshot.getPromise(Register);
      navigate(URL_PATH.LOGIN, { replace: true });
    } catch (e: any) {
      setErrorMessage(JSON.parse(e));
    }
  });

  const handleRegister = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    RegisterAction();
  };

  return (
    <AuthLayout error={errorMessage} text="Register Your Account">
      <Form
        onSubmit={(event) => handleRegister(event)}
        className="space-y-4 md:space-y-6 flex flex-col"
      >
        <label
          htmlFor="fullname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Fullname
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Maulana Sodiqin"
          required={true}
          onChange={(e) => setPayload({ ...payload, ["fullname"]: e.target.value })}
          value={payload["fullname"]}
        />
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
        />{" "}
        <label
          htmlFor="student_id"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Student Id
        </label>
        <input
          type="text"
          name="student_id"
          id="student_id"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="4103700......"
          required={true}
          onChange={(e) => setPayload({ ...payload, ["student_id"]: e.target.value })}
          value={payload["student_id"]}
        />
        <label
          htmlFor="grade"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Grade
        </label>
        <input
          type="text"
          name="grade"
          id="grade"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="A1"
          required={true}
          onChange={(e) => setPayload({ ...payload, ["grade"]: e.target.value })}
          value={payload["grade"]}
        />{" "}
        <label
          htmlFor="departement"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Departement
        </label>
        <input
          type="text"
          name="departement"
          id="departement"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Informatika"
          required={true}
          onChange={(e) => setPayload({ ...payload, ["departement"]: e.target.value })}
          value={payload["departement"]}
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
                Agree to terms and conditions
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
          Sign Up
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have account?
          <Link
            to={URL_PATH.LOGIN}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
          >
            Sign In
          </Link>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default RegisterContent;
