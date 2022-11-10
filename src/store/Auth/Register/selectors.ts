import AuthService from "@service/Auth";
import { selector } from "recoil";
import { RegisterPayload } from "@store/Auth/Register/atoms";
import { getErrorMessage } from "@util/helper";

export const Register = selector({
  key: "auth-register",
  get: async ({ get }) => {
    const payload = get(RegisterPayload);
    try {
      await AuthService.Register(payload);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      throw getErrorMessage(e);
    }
  },
});
