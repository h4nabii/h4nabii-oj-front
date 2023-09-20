// libs
import { RouteRecordRaw } from "vue-router";
import ACCESSES from "@/access/ACCESSES";

// layouts
import UserLayout from "@/layouts/UserLayout.vue";

// views
import NoAuthView from "@/views/NoAuthView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import QuestionsView from "@/views/question/QuestionsView.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";
import ViewQuestionsView from "@/views/question/ViewQuestionsView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "主页",
    component: QuestionsView,
  },
  {
    path: "/questions",
    name: "题目列表",
    component: QuestionsView,
  },
  {
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      access: ACCESSES.USER,
    },
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: ManageQuestionView,
    meta: {
      access: ACCESSES.USER,
    },
  },
  {
    path: "/view/questions/:id",
    name: "在线做题",
    component: ViewQuestionsView,
    props: true,
    meta: {
      hideInMenu: true,
      access: ACCESSES.USER,
    },
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      hideInMenu: true,
      access: ACCESSES.ADMIN,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
  },
];
