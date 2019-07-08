import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue'
import About from './views/About.vue'
import Winner from './views/Winner.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/winner',
      name: 'winner',
      props: true,
      component: Winner
    },
    {
      path: '/game/:id',
      name: 'game',
      props: true,
      component: Game
    }
  ]
})
