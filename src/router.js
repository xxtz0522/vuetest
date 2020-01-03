import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Artworks from './views/Artworks.vue'
import Maps from './views/Maps.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/artworks',
      name: 'artworks',
      component: Artworks,
      children: [
        {
          path: 'line',
          name: 'line',
          // component: Line,
          component: () => import('./views/About.vue')
        },
      ]
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps,
      redirect: { name: 'mapboxs' },
      children: [
        {
          path: 'leaflet',
          name: 'leaflet',
        },
        {
          path: 'mapboxs',
          name: 'mapboxs',
          component: () => import('./views/maps/mapbox.vue')
        },
      ]
    },
  ]
})
