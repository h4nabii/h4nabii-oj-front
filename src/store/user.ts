// initial state
// 存储状态
const state = () => ({
  loginUser: {
    username: "未登录",
    role: "notLogin",
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
