import { Register } from "@store/Auth/Register/selectors";
import { useRecoilValue } from "recoil";

export default (): void => useRecoilValue(Register);
