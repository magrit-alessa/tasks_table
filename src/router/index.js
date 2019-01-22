import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Task from '@/components/Task'
import Tabletasks from '@/components/Tabletasks'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabletasks',
      component: Tabletasks
    },
    {
      path: '/Task/:id',
      name: 'task',
      component: Task
    }
  ] 
})
