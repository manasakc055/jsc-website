import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import AppHome from '../components/Layouts/AppHome.vue'


const routes = [
    {
        path: "/",
        component: AppHome
    },
    {
        path: "/about",
        name: "AppAbout",
        component: ()=> import(/*webpackChunkName:mmmt*/ "../components/Layouts/AppAbout.vue"),
    },
    {
        path: "/service",
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
 
})
router.beforeEach((to, from) => {
    document.title="Jaastrithasolution";
    // to and from are both route objects. must call `next`.
})
export default router