import { atom } from "recoil";
import TokenService from "@service/Token";
import { AuthPayloadTypes } from "@util/types/Auth";

export const isAuthenticated = atom({
  key: "is-auth",
  default: !!TokenService.getToken(),
});

export const AuthPayload = atom<AuthPayloadTypes>({
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
