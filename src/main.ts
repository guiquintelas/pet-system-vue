import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueTheMask);

new Vue({
  router,
  store: store.original,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
