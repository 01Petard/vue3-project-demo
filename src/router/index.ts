import {createRouter, createWebHistory} from 'vue-router';

import Home from '@/views/Home.vue';
import News from '@/views/News.vue';
import About from '@/views/About.vue';
import Person from "@/views/Person.vue";
import Dog from "@/views/Dog.vue";
import Detail from "@/components/Detail.vue";
import Sum from "@/views/Sum.vue";
import SweetTalk from "@/views/SweetTalk.vue";
import FuZi from "@/views/FuZi.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
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
            component: News,
            children: [
                {
                    name: "xiangqing",
                    path: 'detail/:id/:title/:content',
                    component: Detail,
                    props: true
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            name: '人',
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
    ]
});

export default router;