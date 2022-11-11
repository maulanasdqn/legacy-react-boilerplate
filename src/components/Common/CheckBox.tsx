import { InputInterface } from "@util/interfaces/Input";
import { FC, ReactElement } from "react";

const CheckBox: FC<InputInterface> = ({
  label,
  labelClassName = "text-gray-500 dark:text-gray-300",
  name,
  className = "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800",
  required = false,
  onChange,
  value,
}): ReactElement => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          onChange={onChange}
          value={value}
          name={name}
          type="checkbox"
          className={className}
          required={required}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
