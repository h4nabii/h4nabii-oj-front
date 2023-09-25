<template>
  <div id="view-questions-view">
    <a-row gutter="20">
      <a-col :md="12" :sm="24">
        <a-tabs default-active-key="question">
          <a-tab-pane key="question" title="题目">
            <a-card v-if="question" :title="question.title">
              <a-descriptions
                title="判题条件"
                :column="{ xs: 1, md: 1, lg: 1, xl: 3 }"
              >
                <a-descriptions-item label="时间限制">
                  <a-tag>{{ question.judgeConfig.timeLimit || 0 }} ms</a-tag>
                </a-descriptions-item>
                <a-descriptions-item label="内存限制">
                  <a-tag>{{ question.judgeConfig.memoryLimit || 0 }} MB</a-tag>
                </a-descriptions-item>
                <a-descriptions-item label="堆栈限制">
                  <a-tag>{{ question.judgeConfig.stackLimit || 0 }} MB</a-tag>
                </a-descriptions-item>
              </a-descriptions>
              <MDViewer :value="question?.content || ''" />
              <template #extra>
                <a-space>
                  <a-tag
                    v-for="(tag, index) of question.tags"
                    :key="index"
                    color="green"
                    >{{ tag }}
                  </a-tag>
                </a-space>
              </template>
            </a-card>
          </a-tab-pane>
          <a-tab-pane key="comment" title="评论" disabled> 已禁用</a-tab-pane>
          <a-tab-pane key="answer" title="答案">暂时无法查看答案</a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form :model="form" layout="inline">
          <a-form-item field="title" label="语言">
            <a-select
              v-model="form.language"
              style="min-width: 240px"
              placeholder="请选择语言"
            >
              <a-option>java</a-option>
              <a-option>cpp</a-option>
              <a-option>golang</a-option>
            </a-select>
          </a-form-item>
        </a-form>
        <CodeEditor
          :value="form.code as string"
          :language="form.language as string"
          :handleChange="changeCode"
        />
        <a-divider size="0" />
        <a-button type="primary" @click="doSubmit">提交</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, withDefaults } from "vue";
import {
  QuestionControllerService,
  QuestionSubmitAddRequest,
  QuestionSubmitControllerService,
  QuestionVO,
} from "@/request";
import message from "@arco-design/web-vue/es/message";
import MDViewer from "@/components/MDViewer.vue";
import CodeEditor from "@/components/CodeEditor.vue";

const question = ref<QuestionVO>();

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => "",
});

const loadData = async () => {
  const res = await QuestionControllerService.getQuestionVoByIdUsingGet(
    +props.id
  );
  if (res.code === 0) {
    question.value = res.data;
    console.log(res.data);
  } else {
    message.error("加载失败" + res.message);
  }
};

const form = ref<QuestionSubmitAddRequest>({
  language: "java",
  code: "",
});

const changeCode = (value: string) => {
  form.value.code = value;
  console.log(form.value);
};

const doSubmit = async () => {
  if (!question.value?.id) {
    return;
  }

  const res = await QuestionSubmitControllerService.doQuestionSubmitUsingPost({
    ...form.value,
    questionId: question.value?.id,
  });
  if (res.code === 0) {
    message.success("提交成功");
  } else {
    message.error("提交失败" + res.message);
  }
};

onMounted(() => {
  loadData();
});
</script>

<style>
#view-questions-view {
  width: 1400px;
  margin: 0 auto;
}
</style>
