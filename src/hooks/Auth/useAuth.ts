import { isAuthenticated } from "@store/Auth/Common/atoms";
import { useRecoilValue } from "recoil";

export default (): boolean => useRecoilValue(isAuthenticated);
