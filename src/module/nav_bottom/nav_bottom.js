import Vue from 'vue'
import App from './app'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
Vue.use(VueResource);
Vue.use(VueRouter);

import index from '../index/app'
import person  from '../person/app'
const routes = [  
        { path: '/index', component: index },  
        { path: '/person',component: person}     
    ];
const router= new VueRouter({
   routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})