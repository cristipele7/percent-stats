import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './locales/en.json'
import roJson from './locales/ro.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enJson,
        },
        ro: {
            translation: roJson,
        },
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
