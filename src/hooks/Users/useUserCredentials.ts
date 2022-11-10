import { UserMe } from "@store/Users/selectors";
import { UsersMeTypes } from "@util/types/Users";
import { useRecoilValue } from "recoil";

export default (): Array<UsersMeTypes> => useRecoilValue(UserMe);
