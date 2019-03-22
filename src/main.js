import Vue from 'vue';
import 'bootstrap';
import VeeValidate from 'vee-validate';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(VeeValidate, {
  events: 'input|blur',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
