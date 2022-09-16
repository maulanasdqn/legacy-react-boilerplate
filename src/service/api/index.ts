import axios from "axios";
import { TokenService } from "@service/token";

const ApiService = {
  init(baseURL: string) {
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource: string) {
    return axios.get(resource);
  },

  post(resource: string, data: object) {
    return axios.post(resource, data);
  },

  put(resource: string, data: object) {
    return axios.put(resource, data);
  },

  delete(resource: string) {
    return axios.delete(resource);
  },

  customRequest(data: object) {
    return axios(data);
  },
};

export default ApiService;
