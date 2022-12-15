import { FC, ReactElement, ChangeEvent, Suspense, lazy } from "react";
import { useRecoilState } from "recoil";
import { AuthPayload } from "@store/Auth/Common/atoms";

const TextField = lazy(() => import("@components/Common/TextField"));

const LoginTextField: FC = (): ReactElement => {
  const [payload, setPayload] = useRecoilState(AuthPayload);

  const InputFields = [
    {
      type: "email",
      label: "Email",
      labelClassName: "input-label-auth",
      name: "email",
      id: "email",
      className: "input-auth",
      placeholder: "maulana@psu.org",
      required: true,
      value: payload["email"],
    },

    {
      type: "password",
      label: "Password",
      labelClassName: "input-label-auth",
      name: "password",
      id: "password",
      className: "input-auth",
      placeholder: "*************",
      required: true,
      value: payload["password"],
    },
  ];

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  };

  return (
    <Suspense fallback={"Memuat Form..."}>
      {InputFields.map((field, index) => (
        <TextField {...field} key={index} onChange={onChange} />
      ))}
    </Suspense>
  );
};

export default LoginTextField;
