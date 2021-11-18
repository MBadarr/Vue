import { createApp } from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
// import Router from './router/router'
import axios from "axios";
import router from './router'
import '../src/index.css'

createApp(App).use(router).use(VueAxios, axios).mount("#app");
