<template>
  <div id="view-question-view">
    <h1>创建题目</h1>
    <a-form :model="form" layout="horizontal" style="width: 1000px">
      <a-form-item field="title" label="标题">
        <a-input v-model="form.title" placeholder="请输入标题" />
      </a-form-item>

      <a-form-item field="title" label="标签">
        <a-input-tag v-model="form.tags" placeholder="请输入标签" allow-clear />
      </a-form-item>

      <a-form-item field="content" label="题目内容">
        <MDEditor
          mode="split"
          :value="form.content"
          :handle-change="onContentChange"
          style="width: 100%"
        />
      </a-form-item>
      <a-form-item field="answer" label="答案">
        <MDEditor
          mode="split"
          :value="form.answer"
          :handle-change="onAnswerChange"
          style="width: 100%"
        />
      </a-form-item>

      <a-form-item label="判题配置" :content-flex="false" :merge-props="false">
        <a-space direction="vertical" style="min-width: 480px" fill>
          <a-form-item
            label="时间限制"
            field="judgeConfig.timeLimit"
            label-col-flex="80px"
          >
            <a-input-number
              v-model="form.judgeConfig.timeLimit"
              placeholder="请输入时间限制"
              mode="button"
              :min="0"
              size="large"
            />
          </a-form-item>
          <a-form-item
            label="内存限制"
            field="judgeConfig.memoryLimit"
            label-col-flex="80px"
          >
            <a-input-number
              v-model="form.judgeConfig.memoryLimit"
              placeholder="请输入内存限制"
              mode="button"
              :min="0"
              size="large"
            />
          </a-form-item>
          <a-form-item
            label="堆栈限制"
            field="judgeConfig.stackLimit"
            label-col-flex="80px"
          >
            <a-input-number
              v-model="form.judgeConfig.stackLimit"
              placeholder="请输入堆栈限制"
              mode="button"
              :min="0"
              size="large"
            />
          </a-form-item>
        </a-space>
      </a-form-item>

      <a-form-item label="判题用例" :content-flex="false" :merge-props="false">
        <a-row
          :gutter="24"
          v-for="(judgeCaseItem, index) of form.judgeCase"
          :key="index"
        >
          <a-col :span="10">
            <a-form-item
              :label="`输入用例 ${index}`"
              :field="`form.judgeCase[${index}.input]`"
              label-col-flex="84px"
            >
              <a-input v-model="judgeCaseItem.input" placeholder="输入用例" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              :label="`输出用例 ${index}`"
              :field="`form.judgeCase[${index}.output]`"
              label-col-flex="80px"
            >
              <a-input v-model="judgeCaseItem.output" placeholder="输出用例" />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-button
              status="danger"
              @click="handleDelete(index)"
              style="width: 100%"
              >删除
            </a-button>
          </a-col>
        </a-row>
        <a-button type="outline" status="success" @click="handleAdd"
          >新增测试用例
        </a-button>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" long @click="doSubmit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MDEditor from "@/components/MDEditor.vue";
import { QuestionControllerService } from "@/request";
import message from "@arco-design/web-vue/es/message";
import { useRoute } from "vue-router";

const route = useRoute();
const isUpdatePage = route.path.includes("update");

let form = ref({
  title: "",
  tags: [],
  answer: "",
  content: "",
  judgeCase: [
    {
      input: "",
      output: "",
    },
  ],
  judgeConfig: {
    memoryLimit: 1000,
    stackLimit: 1000,
    timeLimit: 1000,
  },
});

const loadData = async () => {
  const id = route.query.id;
  if (!id) {
    return;
  }
  const res = await QuestionControllerService.getQuestionByIdUsingGet(+id);
  if (res.code === 0) {
    form.value = res.data as any;
    if (!form.value.judgeCase) {
      form.value.judgeCase = [{ input: "", output: "" }];
    } else {
      form.value.judgeCase = JSON.parse(form.value.judgeCase as any);
    }
    if (!form.value.judgeConfig) {
      form.value.judgeConfig = {
        memoryLimit: 1000,
        stackLimit: 1000,
        timeLimit: 1000,
      };
    } else {
      form.value.judgeConfig = JSON.parse(form.value.judgeConfig as any);
    }
    if (!form.value.tags) {
      form.value.tags = [];
    } else {
      form.value.tags = JSON.parse(form.value.tags as any);
    }
  } else {
    message.error("加载失败" + res.message);
  }
};

onMounted(() => {
  loadData();
});

const handleAdd = () => {
  if (!form.value.judgeCase) return;
  form.value.judgeCase.push({
    input: "",
    output: "",
  });
};

const handleDelete = (index: number) => {
  if (!form.value.judgeCase) return;
  form.value.judgeCase.splice(index, 1);
};

const doSubmit = async () => {
  if (isUpdatePage) {
    const res = await QuestionControllerService.updateQuestionUsingPost(
      form.value
    );
    if (res.code === 0) {
      message.success("更新成功");
    } else {
      message.error("更新失败" + res.message);
    }
  } else {
    const res = await QuestionControllerService.addQuestionUsingPost(
      form.value
    );
    if (res.code === 0) {
      message.success("创建成功");
    } else {
      message.error("创建失败" + res.message);
    }
  }
};

const onContentChange = (v: string) => {
  form.value.content = v;
};

const onAnswerChange = (v: string) => {
  form.value.answer = v;
};
</script>

<style scoped>
#view-question-view {
}
</style>
