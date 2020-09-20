import './polyfills';
import GlobalComponents from './globalComponents';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

export default {
  async install (Vue) {
    Vue.use(GlobalComponents);
  }
};
