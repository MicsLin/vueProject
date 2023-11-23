import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRouteParamsStore = defineStore('routeParams', () => {
    const route = ref({
        news: {
            isRefreshPage: false
        },
        product: {
            currentPage:'list',
            category: {
                isRefreshPage: false
            },
            list:{
                isRefreshPage: false
            }
        },
        serviceCenters: {
            isRefreshPage: false
        },
        banner: {
            isRefreshPage: false
        },
        feedback: {
            isRefreshPage: false
        },
        partners: {
            isRefreshPage: false
        },
        about: {
            isRefreshPage: false
        },
    })
    return { route }
})