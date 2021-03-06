import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from "@/views/EditLabel.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/money'

    },
    {
        path:'/money',
        component:Money

    },
    {
        path:'/labels',
        component:Labels

    },
    {
        path:'/statistics',
        component:Statistics

    },
    {
        path:'/labels/edit/:id',
        component:EditLabel

    },
    {
        // 会匹配除上面已经精确匹配完剩下的所有路径
        path: '*',
        component:NotFound
    }

    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    routes
});

export default router;
