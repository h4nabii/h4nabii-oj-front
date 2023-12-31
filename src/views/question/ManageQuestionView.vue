<template>
  <div id="manage-question-view">
    <h1>管理题目</h1>
    <a-table
      :columns="columns"
      :data="dataList"
      :pagination="{
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total,
        showTotal: true,
      }"
      @page-change="onPageChange"
    >
      <template #optional="{ record }">
        <div style="min-width: 130px">
          <a-button
            style="margin-right: 10px"
            type="primary"
            @click="doUpdate(record)"
            >修改
          </a-button>
          <a-button status="danger" @click="doDelete(record)">删除</a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { Question, QuestionControllerService } from "@/request";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const dataList = ref([]);
const total = ref(0);
const searchParams = ref({
  pageSize: 10,
  current: 1,
});
const loadData = async () => {
  const res = await QuestionControllerService.listQuestionByPageUsingPost(
    searchParams.value
  );
  if (res.code === 0) {
    console.log(res.data.records);
    dataList.value = res.data.records;
    total.value = +res.data.total;
  } else {
    message.error("加载失败" + res.message);
  }
};

watchEffect(() => {
  loadData();
});

const router = useRouter();

const doUpdate = (record: Question) => {
  router.push({
    path: "/update/question",
    query: {
      id: record.id,
    },
  });
};

const doDelete = async (record: Question) => {
  const res = await QuestionControllerService.deleteQuestionUsingPost({
    id: record.id,
  });
  if (res.code === 0) {
    message.success("删除成功");
    await loadData();
  } else {
    message.error("删除失败", res.message);
  }
};

const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};

onMounted(() => {
  loadData();
});

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "内容",
    dataIndex: "content",
  },
  {
    title: "标签",
    dataIndex: "tags",
  },
  {
    title: "答案",
    dataIndex: "answer",
  },
  {
    title: "提交数",
    dataIndex: "submitNUm",
  },
  {
    title: "通过数",
    dataIndex: "acceptedNUm",
  },
  {
    title: "判题配置",
    dataIndex: "judgeConfig",
  },
  {
    title: "判题用例",
    dataIndex: "judgeCase",
  },
  {
    title: "用户id",
    dataIndex: "userId",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    slotName: "optional",
  },
];
</script>

<style>
#manage-question-view {
}
</style>
