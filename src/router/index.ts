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
import ElementHeji from "@/views/ElementHeji.vue";
import Button from "@/components/Button.vue";
import ButtonDetail from "@/components/ButtonDetail.vue";
import Link from "@/components/Link.vue";
import Layout from "@/components/Layout.vue";
import Container from "@/components/Container.vue";
// import ContrainerExam from "@/components/ContrainerExam.vue";
import Radio from "@/components/Radio.vue";
import Checkbox from "@/components/Checkbox.vue";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";
import Switch from "@/components/Switchs.vue";
import DatePrickers from "@/components/DatePrickers.vue";
import Uploads from "@/components/Uploads.vue";
import Form from "@/components/Form.vue";
import Messages from "@/components/Messages.vue";
import Tables from "@/components/Tables.vue";

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
    },
    {
        path: '/heji',
        component: ElementHeji,
        children: [
            {path: '/button', component: Button},
            {path: '/buttondetail', component: ButtonDetail},
            {path: '/link', component: Link},
            {path: '/layout', component: Layout},
            {path: '/container', component: Container},
            // {path: '/containerexam', component: ContrainerExam},
            {path: '/radio', component: Radio},
            {path: '/checkbox', component: Checkbox},
            {path: '/input', component: Input},
            {path: '/select', component: Select},
            {path: '/switch', component: Switch},
            {path: '/datePickers', component: DatePrickers},
            {path: '/upload', component: Uploads},
            {path: '/form', component: Form},
            {path: '/msg', component: Messages},
            {path: '/table', component: Tables}
        ]
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router