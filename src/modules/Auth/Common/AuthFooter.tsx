import { FC, ReactElement, Fragment } from "react";
import { Link } from "react-router-dom";
import type { AuthFooterType } from "@util/types/Auth";

const AuthFooter: FC<AuthFooterType> = ({ url, label, subLabel, buttonLabel }): ReactElement => {
  return (
    <Fragment>
      <button
        type="submit"
        className="w-full text-blue-400 border-2 border-blue-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {buttonLabel}
      </button>
      <span className="text-sm font-light text-gray-500 dark:text-gray-400">
        {label}
        <Link
          to={url}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
        >
          {subLabel}
        </Link>
      </span>
    </Fragment>
  );
};

export default AuthFooter;
