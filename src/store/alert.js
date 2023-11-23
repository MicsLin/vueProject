import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
    const saveSuccess = (language = 'en') => {
        let obj = {
            zh: '儲存成功!',
            en: 'Saved successfully!'
        }
        let str = obj[language] || obj['en']
        return alert(str)
    }
    const deleteSuccess = (language = 'en') => {
        let obj = {
            zh: '刪除成功!',
            en: 'Deleted successfully!'
        }
        let str = obj[language] || obj['en']
        return alert(str)
    }
    const deleteConfirmed = (language = 'en', title = '') => {
        if (title) title = title + '\n'
        let obj = {
            zh: title + '確認刪除?',
            en: title + 'Confirm delete?'
        }
        let str = obj[language] || obj['en']
        return confirm(str)
    }
    const updateConfirmed = (language = 'en', title = '') => {
        if (title) title = title + '\n'
        let obj = {
            zh: title + '確認修改?',
            en: title + 'Confirm update?'
        }
        let str = obj[language] || obj['en']
        return confirm(str)
    }
    const updatingServiceCenterCompanyMajorTitle = (language = 'en')=>{
        let obj = {
            zh: '會更新前台顯示的資訊',
            en: 'The information displayed on the front stage will be updated'
        }
        return obj[language] || obj['en']
    }
    return { saveSuccess, deleteSuccess, deleteConfirmed,updateConfirmed,updatingServiceCenterCompanyMajorTitle }
})