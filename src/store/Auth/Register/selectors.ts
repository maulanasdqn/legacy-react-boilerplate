import AuthService from "@service/Auth";
import { selector } from "recoil";
import { AuthPayload } from "@store/Auth/Common/atoms";
import { getErrorMessage } from "@util/helper";

export const Register = selector({
  key: "auth-register",
  get: async ({ get }) => {
    const payload = get(AuthPayload);
    try {
      await AuthService.Register(payload);
    } catch (e) {
      throw getErrorMessage(e);
    }
  },
});
