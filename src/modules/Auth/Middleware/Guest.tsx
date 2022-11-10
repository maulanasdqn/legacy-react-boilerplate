import { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "@hooks/Auth/useAuth";
import { CommonInterface } from "@util/interfaces/Common";

const Guest: FC<CommonInterface> = ({ children }): ReactElement => {
  const isAuthenticated = useAuth();
  const Location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" state={{ from: Location }} replace />;
  } else {
    return <>{children}</>;
  }
};

export default Guest;
