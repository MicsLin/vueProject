import { defineStore } from 'pinia'
import { usePopupStore } from './popup'
import { useStorageStore } from './storage'
import { useGlobleStore } from './globle'

export const useRouterSettingStore = defineStore('routerSetting', () => {
    const settingString = 'setUrlRouter=true'
    const resettingString = 'reSetUrlRouter=true'

    const setUrlRouter = () => {
        let href = window.location.href
        let result = href.search(settingString)
        if (result > 0) {
            let popupStore = usePopupStore()
            popupStore.popupFunction('setUrlRouter')
        }
    }
    const reSetUrlRouter = (router) => {
        let href = window.location.href
        let result = href.search(resettingString)
        if (result > 0) {
            try {
                //clear storageStore
                let storageStore = useStorageStore()
                storageStore.setLocalStorageData('pathName', '')
                //set globle 
                let globleStore = useGlobleStore()
                globleStore.changingUrlSetting()
                //delete router params
                clearUrlRourer()
                alert('Reset localStorage successfully')
            } catch {
                alert('Reset localStorage failed')
            }
        }
    }
    const clearUrlRourer = () => {
        let href = window.location.href;
        let hrefArr = href.split("?")
        let paramsString = hrefArr[1]
        if (!paramsString) return location.reload()
        let paramsArr = paramsString.split("&")
        let filteredParamsArr = paramsArr.filter(str => str != settingString && str != resettingString)
        if (filteredParamsArr.length == 0) {
            window.location.href = hrefArr[0]
            return location.reload()
        }
        let str = filteredParamsArr.join('&');
        let newUrl = hrefArr[0] + '?' + str
        window.location.href = newUrl
        location.reload()
    }

    return {
        setUrlRouter, reSetUrlRouter, clearUrlRourer
    }
})