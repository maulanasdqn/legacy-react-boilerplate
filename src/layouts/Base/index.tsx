import { CommonInterface } from "@util/interfaces/Common";
import { ReactElement, FC } from "react";

const BaseLayouts: FC<CommonInterface> = ({ children }): ReactElement => {
  return <section className="flex items-center justify-center h-screen w-full">{children}</section>;
};

export default BaseLayouts;
