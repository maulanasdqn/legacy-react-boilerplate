import ApiService from "@service/Api";
import TokenService from "@service/Token";
import { AuthPayloadTypes } from "@util/types/Auth";
import { getErrorMessage, handleError } from "@util/helper/index";

const AuthService = {
  Login: async (payload: AuthPayloadTypes) => {
    const { email, password } = payload;
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: {
        email,
        password,
      },
      url: "/auth/local/login",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      TokenService.saveToken(res.data.access_token);
      TokenService.saveRefreshToken(res.data.refresh_token);
      ApiService.setHeader();
    } catch (error) {
      throw handleError(error);
    }
  },

  Logout: async () => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: {},
      url: "/auth/logout",
    };
    try {
      await ApiService.customRequest(requestData);
      ApiService.removeHeader();
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      window.location.reload();
    } catch (error) {
      throw getErrorMessage(error);
    }
  },

  Register: async (payload: AuthPayloadTypes) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/auth/local/register",
    };
    try {
      await ApiService.customRequest(requestData);
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default AuthService;
