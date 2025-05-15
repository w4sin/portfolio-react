import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEn from "./locales/en/home.json";
import commonEn from "./locales/en/common.json";
import billingEn from "./locales/en/billing.json";

import homeTh from "./locales/th/home.json";
import commonTh from "./locales/th/common.json";
import billingTh from "./locales/th/billing.json";

i18n
    .use(initReactI18next)
    .init({
        debug: true,
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