import Vue from 'vue'
import App from './app'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
Vue.use(VueResource);
Vue.use(VueRouter);

import Home from '../../components/goods'
import Course from '../../components/course'
const routes = [  
        { path: '/home',component: Home },  
        { path: '/foo',component: Course},   
        { path: '/bar',component: Home }       
    ];
const router= new VueRouter({
   routes
})

router.push('/home')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})