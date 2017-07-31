import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import news from '@/components/news'
import mans from '@/components/mans'
import bolls from '@/components/bolls'
import houss from '@/components/houss'
import betf from '@/components/betf'
import childer from '@/components/childer'
import momos from '@/components/momos'
import axios from 'axios'
Vue.use(Router)

export default new Router({
	 
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    children:[{
      path: '/news',
      name: 'news',
      component: news
    },
     {
      path: '/mans',
      name: 'mans',
      component: mans
    },
    {
      path: '/bolls',
      name: 'bolls',
      component: bolls
    },
    {
      path: '/houss',
      name: 'houss',
      component: houss
    },
    {
      path: '/betf',
      name: 'betf',
      component: betf
    },
     {
      path: '/childer',
      name: 'childer',
      component: childer
    },
     {
      path: '/momos',
      name: 'momos',
      component: momos
    }]


  }]
})
