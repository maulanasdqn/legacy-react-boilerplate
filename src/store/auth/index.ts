import { atom } from "recoil";

export const isAuthenticated = atom({
  key: "is-auth",
  default: false,
});
