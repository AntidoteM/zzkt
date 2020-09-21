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
        path: '/register',
        name: 'Register',
        component: () => import('../views/register/register')
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
        path: '/aboutus',
        component: () => import('../views/home/profile/aboutus/index')
    },
    {
        path: '/Vid_details/:id',
        name: 'Vid_details',
        component: () => import('../views/pay_video/video_details')
    },
	{
        path: '/news_details/:id',
        name: 'news_details',
        component: () => import('../views/home/news/newsdetail')
    },
    {
        path: '/competition/:id',
        name: 'competition',
        component: () => import('../views/competition/competition')
    },
    {
        path: '/classeslist/:id',
        name: 'classeslist',
        component: () => import('../views/home/classes/classes.vue')
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
