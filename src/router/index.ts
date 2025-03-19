// router.ts
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import About from "@/views/About.vue";
import Person from "@/views/Person.vue";
import Dog from "@/views/Dog.vue";
import Sum from "@/views/Sum.vue";
import SweetTalk from "@/views/SweetTalk.vue";
import FuZi from "@/views/FuZi.vue";
import ElementDemo1 from "@/views/ElementDemo1.vue";
import ElementDemo2 from "@/views/ElementDemo2.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/person',
        component: Person
    },
    {
        path: '/dog',
        component: Dog
    },
    {
        path: '/sum',
        component: Sum
    },
    {
        path: '/sweet',
        component: SweetTalk
    },
    {
        path: '/fuzi',
        component: FuZi
    },
    {
        path: '/demo1',
        component: ElementDemo1
    },
    {
        path: '/demo2',
        component: ElementDemo2
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router