import { FormEventHandler, ReactNode, SetStateAction } from "react";

export interface CommonInterface {
  children: ReactNode;
  text?: string;
  error?: string;
  onChange?: SetStateAction<void>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onClick?: SetStateAction<string | void | undefined | null | number>;
  className?: string;
}
