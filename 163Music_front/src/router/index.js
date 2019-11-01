import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import TopList from '@/components/topList/TopList'
import Personalized from '@/components/personalized/Personalized'
import Artist from '@/components/artist/Artist'
import Album from '@/components/album/Album'
import Dj from '@/components/dj/Dj'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/topList',
      name: 'topList',
      component: TopList
    },
    {
      path: '/personalized',
      name: 'personalized',
      component: Personalized
    },
    {
      path: '/artist',
      name: 'artist',
      component: Artist
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/dj',
      name: 'dj',
      component: Dj
    }
  ]
})
