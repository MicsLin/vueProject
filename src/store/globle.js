import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorageStore } from './storage'

export const useGlobleStore = defineStore('globle', () => {
    class UrlSetting {
        constructor() {
            this.isTest = false
            this.pathName = ''
            this.hostDomain = ''
        }
        getPathName() {
            let pathName = '/web/BackEnd'
            let storageStore = useStorageStore()
            let localStoragePathName = storageStore.localStorageInfos?.pathName
            if (localStoragePathName) pathName = localStoragePathName
            this.pathName = pathName
        }
        getHostDomain() {
            if (this.isTest) return this.hostDomain = '192.168.123.20' + this.pathName
            return this.hostDomain = window.location.host + this.pathName;
        }
    }
    const urlSetting = new UrlSetting()
    urlSetting.getPathName()
    urlSetting.getHostDomain()

    const globleInfos = ref({
        pathName: urlSetting.pathName, //for SetUrlRouter.vue
        serverURL: urlSetting.hostDomain,
        token: '',
        adminId: '',
        pagesPermit: '',
        language: 'zh'
    })
    const fileFolderPath = ref({
        imgs: {
            folder: 'imgs',
            path: urlSetting.hostDomain + '/files/imgs'
        },
        files: {
            folder: 'files',
            path: urlSetting.hostDomain + '/files/files'
        },
        getUrl: (key = '', fileName = '') => {
            let folderPath = ''
            if (key == 'imgs') folderPath = fileFolderPath.value.imgs['path']
            if (key == 'files') folderPath = fileFolderPath.value.files['path']
            return `http://${folderPath}/${fileName}`
        }
    })
    const debug = (res) => {
        let href = window.location.href
        let result = href.search('debug=d8g')
        if (result > 0) console.log(res);
    }
    const changingUrlSetting = () => {
        urlSetting.getPathName()
        urlSetting.getHostDomain()
        globleInfos.value.pathName = urlSetting.pathName
        globleInfos.value.serverURL = urlSetting.hostDomain
    }

    return { globleInfos, debug, fileFolderPath, changingUrlSetting }
})