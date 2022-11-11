import { InputInterface } from "@util/interfaces/Input";
import { FC, ReactElement } from "react";

const TextField: FC<InputInterface> = ({
  type,
  label,
  labelClassName,
  name,
  className,
  placeholder,
  required = false,
  onChange,
  value,
}): ReactElement => {
  return (
    <section className="flex flex-col items-start gap-y-2">
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </section>
  );
};

export default TextField;
