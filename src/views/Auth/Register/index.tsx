import { setTitle } from "@util/helper";
import { ReactElement, FC, lazy, Suspense } from "react";
import Loading from "@components/Loading";

const Guest = lazy(() => import("@modules/Auth/Middleware/Guest"));
const RegisterContent = lazy(() => import("@modules/Auth/Register/Content"));

const Register: FC = (): ReactElement => {
  setTitle("Register");
  return (
    <Suspense fallback={<Loading fontSize={"text-base"} text={"Memuat Halaman Login..."} />}>
      <Guest>
        <RegisterContent />
      </Guest>
    </Suspense>
  );
};

export default Register;
