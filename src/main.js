import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueRouter);
