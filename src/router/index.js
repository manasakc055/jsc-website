import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import AppHome from '../components/Layouts/AppHome.vue'
import { left } from '@popperjs/core'


// const routes = [
//     {
//         path: "/",
//         name: 'home',
//         component: AppHome,
//     },
//     {
//         path: "/about",
//         name: 'about',
//         component: ()=> import(/*webpackChunkName:mmmt*/ "../components/Layouts/AppAbout.vue"),
//     },
//     {
//         path: "/service",
//         name: 'service',
//         component: ()=> import("../components/Layouts/AppServices.vue"),

//     },
//     {
//         path: "/sub",
//         redirect: '/sub/1' // Redirect to /sub/1 when /sub is accessed
       
//     },
//     {
//         path: "/sub/:id",
//         name:"info",
//         component: ()=> import("../components/Layouts/info.vue"),
       
//     },
//     {
//         path: "/contact",
//         name: 'contact',
//         component: ()=> import("../components/Layouts/AppContact.vue"),

//     },
//     // {
//     //     path: "/",
//     //     component: ()=> import("../components/Layouts/AppContact.vue"),

//     // },
// ]
const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome,
        meta: {
            title: 'Home - My Vue Application',
            metaTags: [
                {
                    name: 'description',
                    content: 'Welcome to the home page of my Vue application.'
                },
                {
                    property: 'og:title',
                    content: 'Home - My Vue Application'
                },
                {
                    property: 'og:description',
                    content: 'Welcome to the home page of my Vue application.'
                },
                {
                    property: 'og:image',
                    content: 'https://example.com/path-to-your-image.jpg'
                }
            ]
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/*webpackChunkName:mmmt*/ '../components/Layouts/AppAbout.vue'),
        meta: {
            title: 'About Us - My Vue Application',
            metaTags: [
                {
                    name: 'description',
                    content: 'Learn more about us on this page.'
                },
                {
                    property: 'og:title',
                    content: 'About Us - My Vue Application'
                },
                {
                    property: 'og:description',
                    content: 'Learn more about us on this page.'
                },
                {
                    property: 'og:image',
                    content: 'https://example.com/path-to-your-image.jpg'
                }
            ]
        }
    },
    {
        path: '/service',
        name: 'service',
        component: () => import('../components/Layouts/AppServices.vue'),
        meta: {
            title: 'Our Services - My Vue Application',
            metaTags: [
                {
                    name: 'description',
                    content: 'Discover the services we offer.'
                },
                {
                    property: 'og:title',
                    content: 'Our Services - My Vue Application'
                },
                {
                    property: 'og:description',
                    content: 'Discover the services we offer.'
                },
                {
                    property: 'og:image',
                    content: 'https://example.com/path-to-your-image.jpg'
                }
            ]
        }
    },
    {
        path: '/sub',
        redirect: '/sub/1'
    },
    {
        path: '/sub/:id',
        name: 'info',
        component: () => import('../components/Layouts/info.vue'),
        meta: {
            title: 'Info - My Vue Application',
            metaTags: [
                {
                    name: 'description',
                    content: 'Information about the selected item.'
                },
                {
                    property: 'og:title',
                    content: 'Info - My Vue Application'
                },
                {
                    property: 'og:description',
                    content: 'Information about the selected item.'
                },
                {
                    property: 'og:image',
                    content: 'https://example.com/path-to-your-image.jpg'
                }
            ]
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../components/Layouts/AppContact.vue'),
        meta: {
            title: 'Contact Us - My Vue Application',
            metaTags: [
                {
                    name: 'description',
                    content: 'Get in touch with us.'
                },
                {
                    property: 'og:title',
                    content: 'Contact Us - My Vue Application'
                },
                {
                    property: 'og:description',
                    content: 'Get in touch with us.'
                },
                {
                    property: 'og:image',
                    content: 'https://example.com/path-to-your-image.jpg'
                }
            ]
        }
    },
];


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