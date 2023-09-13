<template>
  <div id="globalHeader">
    <a-menu
      mode="horizontal"
      :selected-keys="selectedKeys"
      @menu-item-click="onMenuClick"
    >
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
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { ref } from "vue";

const router = useRouter();

const selectedKeys = ref(["/"]);
router.afterEach((to /* to, from, failure */) => {
  selectedKeys.value = [to.path];
});

const onMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
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
