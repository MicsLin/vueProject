import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopupStore = defineStore('popup', () => {
    const popupInfos = ref({
        isPopup: false,
        key: '',
        data: null
    })

    function popupFunction(key = '', data = null, isPopup = true) {
        popupInfos.value.key = key
        popupInfos.value.data = data
        popupInfos.value.isPopup = isPopup
    }
    function $reset() {
        popupInfos.value.key = ''
        popupInfos.value.data = null
        popupInfos.value.isPopup = false
    }

    return { popupInfos, popupFunction, $reset }
})