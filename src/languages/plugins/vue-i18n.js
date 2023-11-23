import { createI18n } from 'vue-i18n'
import { locale as en } from '../config/i18n/en'
import { locale as tw } from '../config/i18n/tw'

let messages = {}
messages = { en, tw }
const lang = localStorage.getItem('language') || 'tw'

const i18n = createI18n({
    locale: lang,
    messages: messages
})

export default i18n