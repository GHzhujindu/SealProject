import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import GSystemManagement from '@/components/GSystemManagement'
import GApproalSetup from '@/components/GApproalSetup'
import GDaylyManage from '@/components/GDaylyManage'
import GJurisdiction from '@/components/GJurisdiction'
import GSystemUnit from '@/components/GSystemUnit'
import GSystemLogStamp from '@/components/GSystemLogStamp'
import GSystemSetInterFace from '@/components/GSystemSetInterFace'
import GSystemUnitList from '@/components/GSystemUnitList'
import GSystemUserList from '@/components/GSystemUserList'
import GSystemLogStampList from '@/components/GSystemLogStampList'
import GSystemLogOperatelist from '@/components/GSystemLogOperatelist'
import GSystemLogUserList from '@/components/GSystemLogUserList'
import GSystemSetInterFaceList from '@/components/GSystemSetInterFaceList'
import GSystemSetPasswordList from '@/components/GSystemSetPasswordList'
import GSystemSetPowerList from '@/components/GSystemSetPowerList'



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
          path: 'GSystemSetInterFace',
          name: 'GSystemSetInterFace',
          component: GSystemSetInterFace,
            children:[{
                path: '',
                name: 'GSystemSetInterFaceList',
                component: GSystemSetInterFaceList  
            },{
                path: 'GSystemSetInterFaceList',
                name: 'GSystemSetInterFaceList',
                component: GSystemSetInterFaceList  
            },
            {
                path: 'GSystemSetPasswordList',
                name: 'GSystemSetPasswordList',
                component: GSystemSetPasswordList  
            },
            {
                path: 'GSystemSetPowerList',
                name: 'GSystemSetPowerList',
                component: GSystemSetPowerList  
            }]
      },
      {
          path: 'GSystemLogStamp',
          name: 'GSystemLogStamp',
          component: GSystemLogStamp,
            children:[{
                path: '',
                name: 'GSystemLogStampList',
                component: GSystemLogStampList  
            },{
                path: 'GSystemLogStampList',
                name: 'GSystemLogStampList',
                component: GSystemLogStampList  
            },
            {
                path: 'GSystemLogOperatelist',
                name: 'GSystemLogOperatelist',
                component: GSystemLogOperatelist  
            },
            {
                path: 'GSystemLogUserList',
                name: 'GSystemLogUserList',
                component: GSystemLogUserList  
            }]
      },
      {
              path: '',
              name: 'GSystemUnit',
              component: GSystemUnit  
          },
      {
          path: 'GSystemUnit',
          name: 'GSystemUnit',
          component: GSystemUnit,
          children:[{
              path: '',
              name: 'GSystemUnitList',
              component: GSystemUnitList  
          },{
              path: 'GSystemUnitList',
              name: 'GSystemUnitList',
              component: GSystemUnitList  
          },
          {
              path: 'GSystemUserList',
              name: 'GSystemUserList',
              component: GSystemUserList  
          }]
      },
      {
          path: 'GJurisdiction',
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
      		path: 'GApproalSetup',
	      	name: 'GApproalSetup',
     	 	component: GApproalSetup
      },]
     
    }
  ]
})
