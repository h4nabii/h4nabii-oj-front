<template>
  <div id="code-editor" ref="codeEditorDOM" />
</template>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { defineProps, onMounted, ref, toRaw, withDefaults } from "vue";

const codeEditorDOM = ref<HTMLElement>();
const codeEditor = ref<monaco.editor.IStandaloneCodeEditor>();

interface Props {
  value: string;
  handleChange: (v: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  values: () => "",
  handleChange: (v: string) => {
    console.log(v);
  },
});

onMounted(() => {
  if (!codeEditorDOM.value) return;

  codeEditor.value = monaco.editor.create(codeEditorDOM.value, {
    value: props.value,
    language: "java",
    automaticLayout: true,
    colorDecorators: true,
    minimap: {
      enabled: true,
    },
    readOnly: false,
    theme: "vs-dark",
    // lineNumbers: "off",
    // roundedSelection: false,
    // scrollBeyondLastLine: false,
  });

  codeEditor.value.onDidChangeModelContent(() => {
    if (!codeEditor.value) return;

    props.handleChange(toRaw(codeEditor.value).getValue());
  });
});
</script>

<style scoped>
#code-editor {
  min-height: 400px;
}
</style>
