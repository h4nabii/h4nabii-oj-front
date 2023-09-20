<template>
  <a-row id="global-header" align="center" :wrap="false">
    <!-- 图标 -->
    <a-col flex="160px" style="padding: 0 10px">
      <div class="title-bar">
        <img class="logo" src="../assets/logo.png" alt="" />
        <div class="title">花火OJ</div>
      </div>
    </a-col>

    <!-- 菜单栏 -->
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="onMenuClick"
      >
        <!-- v-for 和 v-if 不应该一起使用 -->
        <!--<div v-for="item in routes" :key="item.path">-->
        <!--  <a-menu-item v-if="!item.meta?.hideInMenu">-->
        <!--    {{ item.name }}-->
        <!--  </a-menu-item>-->
        <!--</div>-->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>

    <!-- 用户信息 -->
    <a-col flex="100px">
      <div>
        {{ store.state.loginUser.userName }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import ACCESSES from "@/access/ACCESSES";
import checkAccess from "@/access/checkAccess";

const router = useRouter();
const store = useStore();

const selectedKeys = ref(["/"]);

const visibleRoutes = computed(() => {
  return routes.filter((route) => {
    if (route.meta?.hideInMenu as boolean) return false;
    if (
      // store.state.user.loginUser 不应该赋值给其他变量，否则不会触发属性计算
      !checkAccess(store.state.loginUser, route.meta?.access as ACCESSES)
    ) {
      return false;
    }
    return true;
  });
});

router.afterEach((to /* to, from, failure */) => {
  selectedKeys.value = [to.path];
});

const onMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

// setTimeout(() => {
//   store.dispatch("getLoginUser", {
//     username: "h4nabii",
//     role: ACCESSES.ADMIN,
//   });
// }, 5000);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title-bar .title {
  color: #444;
  margin-left: 16px;
  font-size: 20px;
}

.title-bar .logo {
  height: 48px;
}
</style>
