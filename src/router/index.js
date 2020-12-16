import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home')
  },
  {
    path: '/home/page/:id',
    component: () => import('@/views/home/Home'),
  },
  {
    path: '/article/:id',
    component: () => import('@/views/article/Article')
  },
  {
    path: '/tag',
    component: () => import('@/views/tag/Tag')
  },
  {
    path: '/tag/:id',
    component: () => import('@/views/tag/TagPostList')
  },
  {
    path: '/category',
    component: () => import('@/views/category/Category')
  },
  {
    path: '/category/:id',
    component: () => import('@/views/category/CategoryPostList')
  },
  {
    path: '/archives',
    component: () => import('@/views/archives/Archives')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
