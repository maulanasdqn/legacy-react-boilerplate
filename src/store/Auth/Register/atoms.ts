import { AuthPayloadTypes } from "@util/types/Auth";
import { atom } from "recoil";

export const RegisterPayload = atom<AuthPayloadTypes>({
  key: "register-credential",
  default: {
    email: "",
    password: "",
    fullname: "",
    departement: "",
    student_id: "",
    grade: "",
  },
});
