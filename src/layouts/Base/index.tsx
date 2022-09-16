import { ReactElement, FC } from "react";

const BaseLayouts: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  return <section className="flex items-center justify-center h-screen w-full">{children}</section>;
};

export default BaseLayouts;
