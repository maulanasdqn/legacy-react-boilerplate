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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      throw getErrorMessage(e);
    }
  },
});
