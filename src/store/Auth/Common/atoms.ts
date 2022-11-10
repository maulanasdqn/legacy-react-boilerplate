import { atom } from "recoil";
import TokenService from "@service/Token";

export const isAuthenticated = atom({
  key: "is-auth",
  default: !!TokenService.getToken(),
});
