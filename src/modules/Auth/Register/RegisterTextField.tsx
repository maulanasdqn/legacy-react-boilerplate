import { FC, ReactElement, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { AuthPayload } from "@store/Auth/Common/atoms";
import TextField from "@components/Common/TextField";

const RegisterTextField: FC = (): ReactElement => {
  const [payload, setPayload] = useRecoilState(AuthPayload);

  const className =
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const InputFields = [
    {
      type: "text",
      label: "Fullname",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "fullname",
      id: "fullname",
      className,
      placeholder: "Maulana Sodiqin",
      required: true,
      value: payload["fullname"],
    },

    {
      type: "email",
      label: "Email",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "email",
      id: "email",
      className,
      placeholder: "maulana@psu.org",
      required: true,
      value: payload["email"],
    },

    {
      type: "password",
      label: "Password",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "password",
      id: "password",
      className,
      placeholder: "*************",
      required: true,
      value: payload["password"],
    },

    {
      type: "text",
      label: "Student ID",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "student_id",
      id: "student_id",
      className,
      placeholder: "4103700*****",
      required: true,
      value: payload["student_id"],
    },

    {
      type: "text",
      label: "Grade",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "grade",
      id: "grade",
      className,
      placeholder: "A1",
      required: true,
      value: payload["grade"],
    },

    {
      type: "text",
      label: "Departement",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "departement",
      id: "departement",
      className,
      placeholder: "Informatika",
      required: true,
      value: payload["departement"],
    },
  ];

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  };

  return (
    <>
      {InputFields.map((field, index) => (
        <TextField {...field} key={index} onChange={onChange} />
      ))}
    </>
  );
};

export default RegisterTextField;
