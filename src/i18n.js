import { createI18n } from 'vue-i18n';
import page1 from "./components/Layouts/data/page1.js";
 
// Define your translations here
const messages = {
  en: {
    welcome: "Welcome",
    message: "Hello! This is an English message.",
  },
  te: {
    welcome: "స్వాగతం",
    message: "హలో! ఇది తెలుగు సందేశం.",
  },
  page1
};

const i18n = createI18n({
  locale: 'en', // Set the default language
  fallbackLocale: 'en', // Set fallback language
  messages,
});

export default i18n;
