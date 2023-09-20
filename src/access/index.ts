import router from "@/router";
import { store } from "@/store";
import ACCESSES from "@/access/ACCESSES";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  let loginUser = store.state.loginUser;

  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("getLoginUser");
    loginUser = store.state.loginUser;
  }

  const accessRequired = to.meta?.access ?? ACCESSES.NOT_LOGIN;

  if (accessRequired !== ACCESSES.NOT_LOGIN) {
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === ACCESSES.NOT_LOGIN
    ) {
      next(`/user/login?redirection=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, accessRequired as ACCESSES)) {
      next("/noAuth");
      return;
    }
  }

  next();
});
