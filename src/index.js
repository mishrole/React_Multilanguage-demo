import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

i18next
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next"
    //     }
    //   },
    //   es: {
    //     translation: {
    //       "Welcome to React": "Bienvenido a React y react-i18next"
    //     }
    //   }
    // },
    // lng: "en",
    // lng: document.querySelector('html').lang,
    supportedLngs: ['en', 'es'],
    fallbackLng: "en",
    detection: {
      order: [
        'htmlTag',
        'cookie',
        'querystring',
        'localStorage',
        'sessionStorage',
        'navigator',
        'path',
        'subdomain'
      ],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json'
    },
    react: {
      useSuspense: false
    },

    interpolation: {
      escapeValue: false
    }
  });

  // function App() {
  //   const { t } = useTranslation();
  
  //   return <h2>{t('welcome_to_react')}</h2>;
  // }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
