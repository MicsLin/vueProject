import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useDarkModeStore = defineStore('darkMode', () => {
    const isDarkMode = ref(true)
    const darkModeSwitch = (boolean) => {
        let app = document.querySelector('#app')
        if(boolean){
            isDarkMode.value = true
            app.classList.add('dark')
        }else{
            isDarkMode.value = false
            app.classList.remove('dark')
        }
    }

    return { isDarkMode, darkModeSwitch }
})