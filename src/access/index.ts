import router from "@/router";
import store from "@/store";
import ACCESSES from "@/access/ACCESSES";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let loginUser = store.state.user.loginUser;

  if (!loginUser || !loginUser.role) {
    await store.dispatch("user/getLoginUser");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    loginUser = store.state.user.loginUser;
  }

  const accessRequired = to.meta?.access ?? ACCESSES.NOT_LOGIN;

  if (accessRequired !== ACCESSES.NOT_LOGIN) {
    if (
      !loginUser ||
      !loginUser.role ||
      loginUser.role === ACCESSES.NOT_LOGIN
    ) {
      next(`/user/login?redirection=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, accessRequired as string)) {
      next("/noAuth");
      return;
    }
  }

  next();
});
