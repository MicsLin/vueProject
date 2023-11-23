import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStorageStore = defineStore('storage', () => {
    const storageName = 'Ism20230906_WebAdmin'
    const storage = (function () {
        let result = {
            local: {},
            session: {}
        }
        let isObject = (data) => {
            if (data && typeof data == 'object' && !Array.isArray(data)) return true
            return false
        }

        let jsonString_local = localStorage.getItem(storageName)
        let jsonString_session = sessionStorage.getItem(storageName)
        if (jsonString_local) {
            let data = JSON.parse(jsonString_local)
            if (isObject(data)) result['local'] = data
        }
        if (jsonString_session) {
            let data = JSON.parse(jsonString_session)
            if (isObject(data)) result['session'] = data
        }
        return result
    }())


    const localStorageInfos = ref(storage['local'])
    const sessionStorageInfos = ref(storage['session'])
    const setLocalStorageData = (key = '', data) => {
        if (key) {
            localStorageInfos.value[key] = data
            let jsonStringData = JSON.stringify(localStorageInfos.value)
            localStorage.setItem(storageName, jsonStringData)
        }
    }
    const removeLocalStorage = () => {
        localStorageInfos.value = {}
        localStorage.removeItem(storageName)
    }

    const setSessionStorageData = (key = '', data) => {
        if (key) {
            sessionStorageInfos.value[key] = data
            let jsonStringData = JSON.stringify(sessionStorageInfos.value)
            sessionStorage.setItem(storageName, jsonStringData)
        }
    }
    const removeSessionStorage = () => {
        sessionStorageInfos.value = {}
        sessionStorage.removeItem(storageName)
    }

    return {
        localStorageInfos, setLocalStorageData, removeLocalStorage,
        sessionStorageInfos, setSessionStorageData, removeSessionStorage
    }
})