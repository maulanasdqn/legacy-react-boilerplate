import { CommonInterface } from "@util/interfaces/Common";
import { ReactElement, FC, Suspense } from "react";

const AuthLayout: FC<CommonInterface> = ({ children, text, error }): ReactElement => (
  <section className="bg-gray-50 dark:bg-gray-900 h-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 h-full lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {text}
          </h1>
          <Suspense>
            <span className="text-md font-bold leading-tight tracking-tight text-red-800 dark:text-white">
              {error}
            </span>
          </Suspense>
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default AuthLayout;
