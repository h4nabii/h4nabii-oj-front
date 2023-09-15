// initial state
// 存储状态
import ACCESSES from "@/access/ACCESSES";
import { UserControllerService } from "../../generated";

const state = () => ({
  loginUser: {
    username: "未登录",
  },
});

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  getters,

  // 支持异步
  actions: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      console.log(res);
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", { ...state.loginUser, role: ACCESSES.NOT_LOGIN });
      }
    },
  },

  // 对变量进行CRUD的操作
  mutations: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
};
