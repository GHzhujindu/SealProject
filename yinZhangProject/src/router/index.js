import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import GSystemManagement from '@/components/GSystemManagement'
import GSystemSetup from '@/components/GSystemSetup'
import GDaylyManage from '@/components/GDaylyManage'
import GJurisdiction from '@/components/GJurisdiction'
import Router from 'vue-router'
Vue.use(Router)
// GAdminisrator GUnit GDayly
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      {
          path: '',
          name: 'GJurisdiction',
          component: GJurisdiction
      },
      {
      		path: 'GSystemManagement',
	      	name: 'GSystemManagement',
     	 	  component: GSystemManagement
      },
      {
      		path: 'GDaylyManage',
	      	name: 'GDaylyManage',
     	 	component: GDaylyManage
      },
      {
      		path: 'GSystemSetup',
	      	name: 'GSystemSetup',
     	 	component: GSystemSetup
      }]
     
    }
  ]
})
