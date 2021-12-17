import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { BrowserRouter } from "react-router-dom";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import Root from './routes';
// import reportWebVitals from './reportWebVitals';

import { Header } from './components/header/Header';

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'
import './index.css';

i18next
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: "es",
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

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
