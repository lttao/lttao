import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import toast from "./components/toast";
import loading from "./components/loading";
Vue.prototype.$toast = toast;
Vue.use(loading);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
