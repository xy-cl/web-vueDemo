import Vue from 'vue'
import Router from 'vue-router'
//import login from '@/components/login'

const login  = r => require.ensure([], () => r(require('@/components/login')), 'login');
const index = r => require.ensure([], () => r(require('@/components/index')), 'index');
const main = r => require.ensure([], () => r(require('@/components/main')), 'main');
const ahtml = r => require.ensure([], () => r(require('@/components/ahtml')), 'ahtml');
const bhtml = r => require.ensure([], () => r(require('@/components/bhtml')), 'bhtml');
const chtml = r => require.ensure([], () => r(require('@/components/chtml')), 'chtml');
const dhtml = r => require.ensure([], () => r(require('@/components/dhtml')), 'dhtml');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
    	path: '/index',
    	component: index,
    	name: '首页',
    	children: [
    		{path: '/main', component: main, name: 'main'},
    		{path: '/ahtml', component: ahtml, name: 'ahtml'},
    		{path: '/bhtml', component: bhtml, name: 'bhtml'},
    		{path: '/chtml', component: chtml, name: 'chtml'},
    		{path: '/dhtml', component: dhtml, name: 'dhtml'},
    	]
    }
  ]
})
