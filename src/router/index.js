import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Comp2 from '@/components/Comp2'
import Quiz from '@/components/Quiz'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/Comp2',
      name: 'Comp2',
      component: Comp2
    },
    {
     path: '/Quiz',
     name: 'Quiz',
     component: Quiz
   }

  ]
})
