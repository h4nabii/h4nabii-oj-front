<template>
  <div id="code-editor" ref="codeEditorDOM" />
</template>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { editor } from "monaco-editor";
import { defineProps, onMounted, ref, toRaw, watch, withDefaults } from "vue";
import ITextModel = editor.ITextModel;

const codeEditorDOM = ref<HTMLElement>();
const codeEditor = ref<editor.IStandaloneCodeEditor>();

interface Props {
  value: string;
  language: string;
  handleChange: (v: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  values: () => "",
  language: () => "java",
  handleChange: (v: string) => {
    console.log(v);
  },
});

watch(
  () => props.language,
  () => {
    if (codeEditor.value) {
      monaco.editor.setModelLanguage(
        toRaw(codeEditor.value).getModel() as ITextModel,
        props.language
      );
    }
  }
);

onMounted(() => {
  if (!codeEditorDOM.value) return;

  codeEditor.value = monaco.editor.create(codeEditorDOM.value, {
    value: props.value,
    language: "html",
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
  max-height: 800px;
}
</style>
