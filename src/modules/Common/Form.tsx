import { CommonInterface } from "@util/interfaces/Common";
import { FC, ReactElement } from "react";

const Form: FC<CommonInterface> = ({ children, onSubmit, className }): ReactElement => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
