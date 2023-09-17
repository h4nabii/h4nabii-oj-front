<template>
  <Editor
    id="md-editor"
    :value="value"
    :plugins="plugins"
    :mode="mode"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Editor } from "@bytemd/vue-next";
import { defineProps, withDefaults } from "vue";

interface Props {
  value: string;
  mode: string;
  handleChange: (v: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  mode: () => "split",
  handleChange: (v: string) => {
    console.log(v);
  },
});

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];
</script>

<style>
// 移除尾部的全屏与链接
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:nth-child(5),
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:nth-child(6) {
  display: none;
}
</style>
