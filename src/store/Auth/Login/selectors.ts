import AuthService from "@service/Auth";
import { getErrorMessage } from "@util/helper";
import { selector } from "recoil";
import { AuthPayload } from "@store/Auth/Common/atoms";

export const Login = selector({
  key: "auth-login",
  get: async ({ get }) => {
    const payload = get(AuthPayload);
    try {
      await AuthService.Login(payload);
      window.location.reload();
    } catch (e) {
      throw getErrorMessage(e);
    }
  },
});
