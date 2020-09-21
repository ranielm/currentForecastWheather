import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes/router';
import store from './backend/store';
import { getAllUrlParams, whereShouldIPoint} from 'src/util/commonUtils.js';
import i18n from '@/plugins/i18n';
import Common from "@/util/common";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);  

const options = {
  color: 'yellow',
  failedColor: '#874b4b',
  thickness: '5px',
  autoFinish: false,
  transition: {
    speed: '0.0.1s',
    opacity: '0.6s',
    termination: 0
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};


const config = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', 
  events: 'input|blur',
  fieldsBagName: 'fields',
  i18n: null, 
  i18nRootKey: 'validations', 
  inject: true,
  locale: 'en',
  validity: false,
  useConstraintAttrs: true,
};

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
}).$mount('#app');