import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
            // component： () =>
            //     import (../views/AboutView.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: Home
            // component： () =>
            //     import (../views/AboutView.vue')
    }
]
const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.path == '/login') return next();
    const tokenStr = window.sessionStorage.getItem('token');
    if (!tokenStr) return next('/login');
    next();
});


export default router