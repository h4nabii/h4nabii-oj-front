<template>
  <div id="basic-layout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
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
#basic-layout {
}

#basic-layout .header {
  background-color: skyblue;
  margin-bottom: 16px;
}

#basic-layout .content {
  background: linear-gradient(to right, #ddd, #fff);
  margin-bottom: 16px;
}

#basic-layout .footer {
  background-color: #efefef;
  padding: 16px;

  /* 底部居中 */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
