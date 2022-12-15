import { FC, lazy, ReactElement, Suspense } from "react";
import { Link } from "react-router-dom";
import type { AuthCheckBoxType } from "@util/types/Auth";

const CheckBox = lazy(() => import("@components/Common/CheckBox"));

const AuthCheckBox: FC<AuthCheckBoxType> = ({
  label,
  subLabel,
  value,
  onChange,
  required = true,
}): ReactElement => {
  return (
    <Suspense fallback={"Memuat Checkbox..."}>
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
    </Suspense>
  );
};

export default AuthCheckBox;
