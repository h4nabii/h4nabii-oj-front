<template>
  <div class="home">
    {{ mdValue }}{{ codeValue }}
    <CodeEditor :value="codeValue" :handle-change="onCodeChange" />
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <MDEditor :value="mdValue" :handle-change="onMDChange" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import CodeEditor from "@/components/CodeEditor.vue";
import MDEditor from "@/components/MDEditor.vue";

const mdValue = ref("");
const codeValue = ref("");

const onMDChange = (v: string) => {
  mdValue.value = v;
};

const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>
