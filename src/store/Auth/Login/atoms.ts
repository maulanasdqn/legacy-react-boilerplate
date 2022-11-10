import { AuthPayloadTypes } from "@util/types/Auth";
import { atom } from "recoil";

export const LoginPayload = atom<AuthPayloadTypes>({
  key: "login-credential",
  default: {
    email: "",
    password: "",
  },
});
