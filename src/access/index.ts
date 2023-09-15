import router from "@/router";
import store from "@/store";
import ACCESSES from "@/access/ACCESSES";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const loginUser = store.state.user.loginUser;

  if (!loginUser || !loginUser.role) {
    await store.dispatch("user/getLoginUser");
  }

  const accessRequired = to.meta?.access ?? ACCESSES.NOT_LOGIN;

  if (accessRequired !== ACCESSES.NOT_LOGIN) {
    if (!loginUser || !loginUser.role) {
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
