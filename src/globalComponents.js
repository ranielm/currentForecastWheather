import { SatisfactionSurveys } from "src/components";

const GlobalComponents = {
  install(Vue) {    
    Vue.component('satisfaction-surveys', SatisfactionSurveys);
  }
};

export default GlobalComponents;