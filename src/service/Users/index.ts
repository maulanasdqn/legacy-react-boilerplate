import ApiService from "@service/Api";
import { getErrorMessage } from "@util/helper/index";

const UsersService = {
  UserMe: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: "/users/me/",
    };
    try {
      ApiService.setHeader();
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw getErrorMessage(error);
    }
  },
};
export default UsersService;
