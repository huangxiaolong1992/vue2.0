import Vue from 'vue'
import App from './app'
import VueResource from 'vue-resource';
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})