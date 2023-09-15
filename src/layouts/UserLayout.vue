<template>
  <div id="user-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo.png" class="logo" alt="logo" />
          <div>花火OJ</div>
        </a-space>
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="footer">
        <a href="">Link</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#user-layout {
  text-align: center;
  background: url("../assets/background.jpg") 0 0/100% 100%;
}

#user-layout .logo {
  width: 64px;
  height: 64px;
}

#user-layout .header {
  margin-top: 16px;
}

#user-layout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#user-layout .footer {
  padding: 16px;

  /* 底部居中 */
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
