import axios from "axios";
import TokenService from "@service/Token";
import AuthService from "@service/Auth";

const ApiService = {
  _401interceptor: null || 0,

  init(baseURL: string) {
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  customRequest(data: object) {
    return axios(data);
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.request.status === 401) {
          if (error.config.url.includes("auth/login")) {
            AuthService.Logout();
            throw error;
          } else {
            try {
              const res = await AuthService.RefreshToken();
              TokenService.saveRefreshToken(res?.data?.refresh_token);
              TokenService.saveToken(res?.data?.access_token);
            } catch (e) {
              AuthService.Logout();
              throw error;
            }
          }
        }
        throw error;
      },
    );
  },

  unmount401Interceptor() {
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;
