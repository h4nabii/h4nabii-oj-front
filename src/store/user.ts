// initial state
// 存储状态
import ACCESSES from "@/access/ACCESSES";

const state = () => ({
  loginUser: {
    username: "未登录",
    role: ACCESSES.NOT_LOGIN,
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
      commit("updateUser", payload);
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
