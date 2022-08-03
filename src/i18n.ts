import i18next from 'i18next'
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector'
import i18nextXhrBackend from 'i18next-xhr-backend'
import translations from './assets/dictionaries/translation'

const localeNamespace = 'translations'
const defaultLocale = localStorage.getItem('i18nextLng') || 'en'

i18next
  .use(i18nextXhrBackend)
  .use(i18nextBrowserLanguagedetector)
  .init({
    lng: defaultLocale,
    fallbackLng: defaultLocale, // same fallback as the initial user.locale
    debug: false,
    // have a common namespace used around the full app
    ns: [localeNamespace],
    defaultNS: localeNamespace,
    returnObjects: true,
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // we init with resources
    resources: translations,
  })

export default i18next
