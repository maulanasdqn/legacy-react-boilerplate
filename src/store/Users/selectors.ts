import UsersService from "@service/Users";
import { UsersMeTypes } from "@util/types/Users";
import { selector } from "recoil";

export const UserMe = selector<Array<UsersMeTypes>>({
  key: "user-me",
  get: async () => await UsersService.UserMe(),
});
