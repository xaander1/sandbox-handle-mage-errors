import Vue from "vue";
import App from "./App";
import SuiVue from "semantic-ui-vue";

Vue.config.productionTip = false;
Vue.use(SuiVue);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
