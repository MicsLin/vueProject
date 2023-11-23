import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../Home.vue'),
        meta: {
            breadcrumb_tw: [{ name: '首頁' }],
            breadcrumb_en: [{ name: 'Home' }]
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const theFolder = '/myHome/'
const router = createRouter({
    history: createWebHashHistory(theFolder),
    routes
})

export default router
