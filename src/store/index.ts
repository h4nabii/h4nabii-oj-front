import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { LoginUserVO, UserControllerService } from "../../generated";
import ACCESSES from "@/access/ACCESSES";

export interface State {
  loginUser: LoginUserVO;
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loginUser: {
      userName: "未登录",
    },
  },

  getters: {},

  // 对变量进行CRUD的操作
  mutations: {
    updateUser(state, payload: LoginUserVO) {
      state.loginUser = payload;
    },
  },

  // 支持异步
  actions: {
    async getLoginUser({ commit, state }) {
      const { code, data } = await UserControllerService.getLoginUserUsingGet();
      if (!code) {
        const { userRole, userName } = data as LoginUserVO;
        commit("updateUser", { userRole, userName });
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESSES.NOT_LOGIN,
        });
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
