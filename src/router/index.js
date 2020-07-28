import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('../views/home/home'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/home/home/index')
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('../views/home/profile/index'),
                children: [
                    {
                        path: '/data',
                        component: () => import('../views/home/profile/studydata/index')
                    },
                ]
            },
            {
                path: 'news',
                name: 'news',
                component: () => import('../views/home/news/index')
            },
            {
                path: 'classes',
                name: 'classes',
                component: () => import('../views/home/classes/index')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/login')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
