import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEn from "./assets/locales/en/home.json";
import commonEn from "./assets/locales/en/common.json";
import billingEn from "./assets/locales/en/billing.json";

import homeTh from "./assets/locales/th/home.json";
import commonTh from "./assets/locales/th/common.json";
import billingTh from "./assets/locales/th/billing.json";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        fallbackNS: 'common',
        resources: {
            en: {
                common: commonEn,
                home: homeEn,
                billing: billingEn,
            },
            th: {
                common: commonTh,
                home: homeTh,
                billing: billingTh,
            },
        }
    })