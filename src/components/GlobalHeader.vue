<script setup lang="ts"></script>

<template>
  <div id="globalHeader">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
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
      <a-menu-item key="1">Home</a-menu-item>
      <a-menu-item key="2">Solution</a-menu-item>
      <a-menu-item key="3">Cloud Service</a-menu-item>
      <a-menu-item key="4">Cooperation</a-menu-item>
    </a-menu>
  </div>
</template>

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
