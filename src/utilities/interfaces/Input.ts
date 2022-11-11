import { InputHTMLAttributes, ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  label?: string;
  name: string;
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | undefined;
}
