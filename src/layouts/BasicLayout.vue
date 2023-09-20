<template>
  <div id="basic-layout">
    <a-layout style="min-height: 100vh">
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
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basic-layout .content {
  /* background: linear-gradient(to right, #ddd, #fff);  */
  /* max-width: 1400px; */
  /* margin: 0 auto; */
  padding: 20px;
}

#basic-layout .footer {
  background-color: #efefef;
  padding: 16px;

  /* 底部居中 */
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
