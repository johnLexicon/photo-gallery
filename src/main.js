import Vue from 'vue';
import App from './App.vue';
import router from './router';
import LazyLoadDirective from './directives/LazyLoadDirective';

Vue.config.productionTip = false;

Vue.directive('lazyload', LazyLoadDirective);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
