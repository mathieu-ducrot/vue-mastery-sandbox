import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Drawer.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () =>
        import(/* webpackChunkName: "cards" */ './views/Cards.vue')
    },
    {
      path: '/gsap-simple',
      name: 'gsap-simple',
      component: () =>
        import(/* webpackChunkName: "simple" */ './views/Simple.vue')
    },
    {
      path: '/gsap-stagger',
      name: 'gsap-stagger',
      component: () =>
        import(/* webpackChunkName: "stagger" */ './views/Stagger.vue')
    },
    {
      path: '/gsap-state',
      name: 'gsap-state',
      component: () =>
        import(/* webpackChunkName: "stagger" */ './views/State.vue')
    },
    {
      path: '/gsap-timeline',
      name: 'gsap-timeline',
      component: () =>
        import(/* webpackChunkName: "stagger" */ './views/Timeline.vue')
    },
    {
      path: '/gsap-master',
      name: 'gsap-master',
      component: () =>
        import(/* webpackChunkName: "stagger" */ './views/Master.vue')
    }
  ]
})
