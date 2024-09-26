import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../components/Layouts/AppHome.vue';

const routes = [
    {
        path: "/home",
        component: AppHome
    },
    {
        path: "/about",
        name: "AppAbout",
        component: () => import(/* webpackChunkName: "mmmt" */ "../components/Layouts/AppAbout.vue"),
    },
    {
        path: "/service",
        component: () => import("../components/Layouts/AppServices.vue"),
    },
    {
        path: "/sub",
        redirect: '/sub/1',
    },
    {
        path: "/sub/:id",
        name: "info",
        component: () => import("../components/Layouts/info.vue"),
    },
    {
        path: "/contact",
        component: () => import("../components/Layouts/AppContact.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
   
    scrollBehavior() {
        // Return to top position without any animation
        return { top: 0 };
    }
     
});




export default router;
