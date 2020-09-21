import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes/router';
import store from './backend/store';
import { getAllUrlParams, whereShouldIPoint} from 'src/util/commonUtils.js';
import i18n from '@/plugins/i18n';
import Common from "@/util/common";
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.use(BootstrapVue);  

Vue.mixin(Common);
Vue.use(getAllUrlParams);
Vue.use(whereShouldIPoint);
Vue.use(VueRouter);

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  getAllUrlParams,
  whereShouldIPoint,
  i18n: i18n(),
  Vuetify
}).$mount('#app');