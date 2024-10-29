import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import AppHome from '../components/Layouts/AppHome.vue'
import { left } from '@popperjs/core'


const routes = [
    {
        path: "/",
        name: 'home',
        component: AppHome,
    },
    {
        path: "/about",
        name: 'about',
        component: ()=> import(/*webpackChunkName:mmmt*/ "../components/Layouts/AppAbout.vue"),
    },
    {
        path: "/service",
        name: 'service',
        component: ()=> import("../components/Layouts/AppServices.vue"),

    },
    {
        path: "/sub",
        redirect: '/sub/1' // Redirect to /sub/1 when /sub is accessed
       
    },
    {
        path: "/sub/:id",
        name:"info",
        component: ()=> import("../components/Layouts/info.vue"),
       
    },
    {
        path: "/contact",
        name: 'contact',
        component: ()=> import("../components/Layouts/AppContact.vue"),

    },
    // {
    //     path: "/",
    //     component: ()=> import("../components/Layouts/AppContact.vue"),

    // },
]

const router = createRouter({
    history: createWebHistory('/jsc-website/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition){
            return savedPosition;
        } else{
            window.scrollTo({
                top:0,
                left:0,
                behavior:"instant"
            });
            return {top: 0};
        }
    },
 
})


export default router