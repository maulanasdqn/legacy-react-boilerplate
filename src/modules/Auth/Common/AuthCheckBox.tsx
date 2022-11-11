import CheckBox from "@components/Common/CheckBox";
import { ChangeEventHandler, FC, ReactElement } from "react";
import { Link } from "react-router-dom";

type AuthCheckBoxType = {
  label: string;
  subLabel: string;
  value: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const AuthCheckBox: FC<AuthCheckBoxType> = ({
  label,
  subLabel,
  value,
  onChange,
  required = true,
}): ReactElement => {
  return (
    <div className="flex items-center justify-between">
      <CheckBox
        type="checkbox"
        name={""}
        label={label}
        value={value}
        onChange={onChange}
        required={required}
      />
      <Link
        to="#"
        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        {subLabel}
      </Link>
    </div>
  );
};

export default AuthCheckBox;
