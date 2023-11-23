import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
    const isDisplayedMenu = ref(true)
    const isSmScreenMenu = ref(false)
    const menuSwitch = () => isDisplayedMenu.value = !isDisplayedMenu.value
    const menuBestUIUXWhenScreenResize = (windowInnerWidth) => {
        if (windowInnerWidth < 640) {
            isDisplayedMenu.value = false
            isSmScreenMenu.value = true
        }
        else {
            isDisplayedMenu.value = true
            isSmScreenMenu.value = false
        }
    }

    const menuSetting = ref([
        { name: '使用者配置檔案', key: 'Menu.userProfile', icon: 'fa-user', size: 'lg', url: '', isDisplayed: true, isFocus: false, bounce: false },
        { name: '設定', key: 'Menu.settings', icon: 'fa-gear', size: 'lg', url: '', isDisplayed: true, isFocus: false, spin: false },
        { name: '登出', key: 'Menu.logout', icon: 'fa-right-from-bracket', size: 'lg', url: '', isDisplayed: true, isFocus: false, flip: false }
    ])
    const menuSettingHover = (key = '', boolean = false) => {
        if (key == menuSetting.value[0]['key']) return menuSetting.value[0].bounce = boolean
        if (key == menuSetting.value[1]['key']) return menuSetting.value[1].spin = boolean
        if (key == menuSetting.value[2]['key']) return menuSetting.value[2].flip = boolean
    }

    //會員管理(只有super可看到) 商品管理 最新消息 服務中心 GA系統 
    const menuPages = ref([
        { name: '會員系統', key: 'Menu.product', icon: 'fa-sitemap', size: 'lg', url: '', isDisplayed: false, isFocus: false },
        { name: '產品管理', key: 'Menu.product', icon: 'fa-sitemap', size: 'lg', url: 'product', isDisplayed: true, isFocus: true },
        { name: '最新消息', key: 'Menu.news', icon: 'fa-newspaper', size: 'lg', url: 'news', isDisplayed: true, isFocus: false },
        { name: '服務中心', key: 'Menu.services', icon: 'fa-screwdriver-wrench', size: 'lg', url: 'serviceCenters', isDisplayed: true, isFocus: false },
        { name: 'Banner', key: 'Menu.banner', icon: 'fa-rectangle-ad', size: 'lg', url: 'banner', isDisplayed: true, isFocus: false },
        { name: 'Feedback', key: 'Menu.feedback', icon: 'fa-comments', size: 'lg', url: 'feedback', isDisplayed: true, isFocus: false },
        { name: 'Partners', key: 'Menu.partners', icon: 'fa-handshake', size: 'lg', url: 'partners', isDisplayed: true, isFocus: false },
        { name: 'About', key: 'Menu.about', icon: 'fa-circle-info', size: 'lg', url: 'about', isDisplayed: true, isFocus: false },
        { name: 'GA系統', key: 'Menu.analytics', icon: 'fa-magnifying-glass-chart', size: 'lg', url: '', isDisplayed: true, isFocus: false }
    ])

    return { isDisplayedMenu,isSmScreenMenu, menuSwitch, menuBestUIUXWhenScreenResize, menuSetting, menuSettingHover, menuPages }
})