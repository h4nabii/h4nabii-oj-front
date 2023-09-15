<template>
  <!-- 栅格布局 -->
  <a-row id="globalHeader" class="grid-demo" align="center" :wrap="false">
    <!-- 菜单栏 -->
    <a-col flex="auto">
      <!-- 菜单布局 -->
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="onMenuClick"
      >
        <!-- 图标 -->
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="" />
            <div class="title">花火OJ</div>
          </div>
        </a-menu-item>
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
        {{ store.state.user?.loginUser?.username }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESSES from "@/access/ACCESSES";

const router = useRouter();
const store = useStore();

const visibleRoutes = computed(() => {
  return routes.filter((route) => {
    if (route.meta?.hideInMenu) return false;
    if (
      // store.state.user.loginUser 不应该赋值给其他变量，否则不会触发属性计算
      !checkAccess(store.state.user.loginUser, route.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

const selectedKeys = ref(["/"]);
router.afterEach((to /* to, from, failure */) => {
  selectedKeys.value = [to.path];
});

const onMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
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
