import ACCESSES from "@/access/ACCESSES";
import { LoginUserVO } from "@/request";

const checkAccess = (
  loginUser: LoginUserVO,
  accessRequired = ACCESSES.NOT_LOGIN
) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESSES.NOT_LOGIN;
  if (accessRequired === ACCESSES.NOT_LOGIN) {
    return true;
  }
  if (accessRequired === ACCESSES.USER) {
    if (loginUserAccess === ACCESSES.NOT_LOGIN) {
      return false;
    }
  }
  if (accessRequired === ACCESSES.ADMIN) {
    if (loginUserAccess !== ACCESSES.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
