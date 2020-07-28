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
                path: '/profile',
                name: 'profile',
                component: () => import('../views/home/profile/index')
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
    },
    {
        path: '/studydata',
        component: () => import('../views/home/profile/studydata/index')
    },
    {
        path: '/studyrecord',
        component: () => import('../views/home/profile/studyrecord/index')
    },
    {
        path: '/studyachi',
        component: () => import('../views/home/profile/studyachi/index')
    },
    {
        path: '/setting',
        component: () => import('../views/home/profile/setting/index')
    },
	{
        path: '/Vid_details',
        name: 'Vid_details',
        component: () => import('../views/pay_video/video_details')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
