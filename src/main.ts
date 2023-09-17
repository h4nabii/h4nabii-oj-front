import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Arco design for vue
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "bytemd/dist/index.css";
import "@/access";

createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
