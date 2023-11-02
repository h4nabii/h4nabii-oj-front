## H4nabii OJ - Practice your JS skills

[![framework](https://img.shields.io/badge/Vue%203-42b883?label=Framework)](https://vuejs.org/)
[![state](https://img.shields.io/badge/Vuex-42b883?label=State%20Management)](https://vuex.vuejs.org/)
[![router](https://img.shields.io/badge/Vue--Router-42b883?label=Router)](https://router.vuejs.org/)

- 主要框架 (Main Framework)：Vue 3
- 状态管理 (State Managing)：Vuex
- 页面路由 (Page Router)：Vue Router



### 页面列表 | Page List

1. 用户注册页面
2. 创建题目页面
3. 题目管理页面（管理员）
    - 查看（搜索功能）
    - 删除
    - 修改
    - 快捷创建
4. 题目列表页面（用户）
5. 题目详情页面（在线做题，后端未实现）
    - 查看判题状态 （未实现）
6. 题目提交列表页面



### 题目存储 | Question Storage

题目存储在服务器的 MySQL 数据库中，用户创建的题目将发送到服务器端进行存储。



### 提交代码运行时 | Submitted Code Runtime

用户提交的代码运行在本地浏览器的 Web Worker 中，确保用户代码运行环境与应用运行环境隔离。
