import Loading from "@components/Loading";
import { setTitle } from "@util/helper";
import { ReactElement, FC, lazy, Suspense } from "react";

const Guest = lazy(() => import("@modules/Auth/Middleware/Guest"));
const LoginContent = lazy(() => import("@modules/Auth/Login/Content"));

const Login: FC = (): ReactElement => {
  setTitle("Login");
  return (
    <Suspense fallback={<Loading fontSize={"text-base"} text={"Memuat Halaman Login..."} />}>
      <Guest>
        <LoginContent />
      </Guest>
    </Suspense>
  );
};

export default Login;
